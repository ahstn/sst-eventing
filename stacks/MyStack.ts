import { Api, StackContext, Topic } from '@serverless-stack/resources'

export function MyStack({ stack }: StackContext) {
    const topic = new Topic(stack, 'Ordered', {
        subscribers: {
            receipt: 'functions/receipt.main',
            shipping: 'functions/shipping.main',
        },
    })

    const api = new Api(stack, 'Api', {
        defaults: {
            function: {
                // Pass in the topic to our API
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

    stack.addOutputs({
        ApiEndpoint: api.url,
    })
}
