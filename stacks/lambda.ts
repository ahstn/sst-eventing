import { StackContext, Function } from '@serverless-stack/resources'

export function ReceiptSubscriber({ stack }: StackContext) {
    return new Function(stack, 'HandleOrder', {
        handler: 'functions/receipt.main',
        timeout: 3,
    })
}
