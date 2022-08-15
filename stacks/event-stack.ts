import { Api, StackContext, Topic } from '@serverless-stack/resources'
import { Datadog } from 'datadog-cdk-constructs-v2'

export function EventStack({ stack }: StackContext) {
    const topic = new Topic(stack, 'Ordered', {
        subscribers: {
            receipt: {
                function: {
                    handler: 'functions/receipt.main',
                    timeout: 3,
                },
            },
            shipping: 'functions/shipping.main',
        },
    })

    const api = new Api(stack, 'Api', {
        defaults: {
            function: {
                environment: {
                    topicArn: topic.topicArn,
                },
                permissions: [topic],
            },
        },
        routes: {
            'POST /order': 'functions/order.main',
        },
    })

    const datadog = new Datadog(stack, 'Datadog', {
        nodeLayerVersion: 65,
        extensionLayerVersion: 13,
        apiKey: process.env.DATADOG_API_KEY,
        env: 'qa',
        service: 'sst-eventor',
    })
    datadog.addLambdaFunctions(stack.getAllFunctions())

    stack.addOutputs({
        ApiEndpoint: api.url,
    })
}
