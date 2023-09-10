import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html';

const BaseHTML = ({ children }: elements.Children) => `<html lang="en">
    <head>
        <title>Hello World</title>
    </head>
    ${children}
</html>`

const app = new Elysia()
  .use(html()).get("/", () => <BaseHTML>
    <body>
      <h1>Hello World OMG</h1>
    </body>
  </BaseHTML>)
  .listen(5000)

console.log(`Elysia is running at http://${app.server?.hostname}:${app.server?.port}`)