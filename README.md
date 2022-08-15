# SST Eventing

An example serverless app created with [SST] used to demonstrate creating Lambdas and Topics with Lambda consumers.

## 🚀 Features

-   TypeScript 4.7 with [`esbuild`] via [SST].
-   [ESLint] with [plugin/import] and [Prettier].
-   Lambda integration with [Datadog Serverless Monitoring | DataDog Blog]
-   Example Python topic publisher using [boto3].

## Getting Started

[**Read the tutorial**](https://sst.dev/examples/how-to-use-pub-sub-in-your-serverless-app.html)

```shell
.
├── python             # Example Publisher
│   ├── app.py
│   └── requirements.txt
├── services           # Lambda Consumers
│   ├── functions
│   └── package.json
├── sst.json
└── stacks             # IaC for SNS & Consumers
    ├── MyStack.ts
    └── index.ts
```

## Commands

**TLDR:** `npm run start && open https://console.sst.dev`

```shell
➜ npm run
Lifecycle scripts included in sst-eventing@0.0.0:
  start
    sst start
  test
    vitest run

available via `npm run-script`:
  build
    sst build
  deploy
    sst deploy
  remove
    sst remove
  console
    sst console
  typecheck
    tsc --noEmit
  test:lint
    eslint stacks --ext .ts
  test:prettier
    prettier 'src/**/*.ts'
```

## Documentation

Learn more about the SST.

-   [Docs](https://docs.sst.dev/)
-   [@serverless-stack/cli](https://docs.sst.dev/packages/cli)
-   [@serverless-stack/resources](https://docs.sst.dev/packages/resources)

[`esbuild`]: https://esbuild.github.io/
[sst]: https://sst.dev
[eslint]: https://eslint.org/
[plugin/import]: https://github.com/import-js/eslint-plugin-import
[prettier]: https://prettier.io/
[datadog serverless monitoring | datadog blog]: https://www.datadoghq.com/blog/monitor-aws-fully-managed-services-datadog-serverless-monitoring/
[boto3]: https://github.com/boto/boto3
