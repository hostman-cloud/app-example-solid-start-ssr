# SolidStart SSR

Example of a [SolidStart](https://start.solidjs.com/) application with server-side rendering (SSR) that can be deployed to **Hostman** without configuration.

:tada: [Demo]()

:rocket: [Create your Apps](https://hostman.com/my/apps/create)

:books: [Hostman Apps Documentation](https://hostman.com/docs/app-platform/backend-apps/)

## Deployment settings

Enable SSR support when creating the app: it will be deployed as a Node.js backend.

| Parameter       | Value                           |
| --------------- | ------------------------------- |
| Framework       | SolidStart, SSR enabled         |
| Node.js version | 24                              |
| Build command   | `npm run build`                 |
| Start command   | `node .output/server/index.mjs` |

The server is built by Nitro with the `node-server` preset (see `vite.config.ts`) and listens on all interfaces. The default port is `3000`, it can be changed with the `PORT` environment variable.

Static version: [app-example-solid-start](https://github.com/hostman-cloud/app-example-solid-start).

## What the example shows

- `/`: the page is rendered on the server on every request; the render time, Node.js version and `User-Agent` come from a server function (`"use server"`) and are already in the HTML.
- `/about`: the second page of the app.
- `/api/hello`: an API endpoint that returns JSON.

## <a name="dev"></a>Running locally

```bash
# install dependencies
npm install

# run in development mode with file watching
npm run dev

# build for production
npm run build

# start the built application
npm run start
```

SolidStart 2 officially supports Node.js 24 and newer.
