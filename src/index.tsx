import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import home from "@services/home";
import todos from "@services/todos";

const app = new Elysia()
  .use(html())
  .get("/styles.css", () => Bun.file("./src/styles/output.css"))
  .get("/", home.get)
  .get("/todos", todos.get)
  .listen(5000);

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
