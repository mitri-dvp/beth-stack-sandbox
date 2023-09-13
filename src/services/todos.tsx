import TodoForm from "@components/Todo/TodoForm";
import TodoItem from "@components/Todo/TodoItem";
import TodoList from "@components/Todo/TodoList";
import { db } from "@db";
import { TodoInsert, todosTable } from "@db/schema";
import { eq } from "drizzle-orm";

const todos = {
  get: async () => {
    const todos = await db.select().from(todosTable);

    return (
      <div class="flex flex-col gap-4 w-full">
        <h1 class="text-4xl mb-4 font-semibold">To-Do List:</h1>
        <TodoList todos={todos} />
        <TodoForm />
      </div>
    );
  },
  getList: async () => {
    const todos = await db.select().from(todosTable);

    return <TodoList todos={todos} />;
  },
  create: async ({
    body,
    headers,
  }: {
    body: { content: string };
    headers: { [header: string]: string };
  }) => {
    if (body.content.length === 0) {
      throw new Error("Plese add content");
    }

    const newTodo: TodoInsert = {
      content: body.content,
    };

    await db.insert(todosTable).values(newTodo);

    headers["HX-Trigger"] = "create-todo";
  },
  toggle: async ({ params }: { params: Record<"id", number> }) => {
    const todo = await db
      .select()
      .from(todosTable)
      .where(eq(todosTable.id, params.id));

    if (todo.length) {
      const newTodo = await db
        .update(todosTable)
        .set({ completed: !todo[0].completed })
        .where(eq(todosTable.id, params.id))
        .returning();

      return <TodoItem todo={newTodo[0]} />;
    }
  },
  delete: async ({
    params,
    headers,
  }: {
    params: Record<"id", number>;
    headers: { [header: string]: string };
  }) => {
    await db.delete(todosTable).where(eq(todosTable.id, params.id));
    headers["HX-Trigger"] = "delete-todo";
  },
};

export default todos;
