import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

const page = `<html lang="en">
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>`

const app = new Elysia()
  .use(html()).get("/", () => page)
  .listen(5000)

console.log(`Elysia is running at http://${app.server?.hostname}:${app.server?.port}`)