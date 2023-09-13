import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import home from "@services/home";
import todos from "@services/todos";

const app = new Elysia()
  .use(html())
  .get("/styles.css", () => Bun.file("./src/styles/output.css"))
  .get("/", home.get)
  .get("/todos", todos.get)
  .get("/todos/list", todos.getList)
  .post(
    "todos",
    ({ body, set: { headers } }) => todos.create({ body, headers }),
    {
      body: t.Object({
        content: t.String(),
      }),
    }
  )
  .put("/todos/toggle/:id", ({ params }) => todos.toggle({ params }), {
    params: t.Object({
      id: t.Numeric(),
    }),
  })
  .delete(
    "/todos/:id",
    ({ params, set: { headers } }) => todos.delete({ params, headers }),
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    }
  )
  .listen(5000);

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
