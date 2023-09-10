import { Elysia } from 'elysia'

const app = new Elysia().get("/", () => "Hello World")
    .listen(5000)

console.log(`Elysia is running at http://${app.server?.hostname}:${app.server?.port}`)