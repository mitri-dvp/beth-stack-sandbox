import TodoForm from "@components/Todo/TodoForm";
import TodoItem from "@components/Todo/TodoItem";
import TodoList from "@components/Todo/TodoList";
import { db } from "src/db/db";

const todos = {
  get: () => (
    <div class="flex flex-col gap-4 w-full">
      <TodoList />
      <TodoForm />
    </div>
  ),
  getList: () => <TodoList />,
  create: ({
    body,
    headers,
  }: {
    body: { content: string };
    headers: { [header: string]: string };
  }) => {
    if (body.content.length === 0) {
      throw new Error("Plese add content");
    }

    const newTodo: Todo = {
      id: db[db.length - 1].id + 1,
      content: body.content,
      completed: false,
    };

    db.push(newTodo);

    headers["HX-Trigger"] = "new-todo";

    return <TodoForm />;
  },
  toggle: ({ params }: { params: Record<"id", number> }) => {
    const todo = db.find((todo) => todo.id === params.id);
    if (todo) {
      todo.completed = !todo.completed;
      return <TodoItem todo={todo} />;
    }
  },
  delete: ({ params }: { params: Record<"id", number> }) => {
    const index = db.findIndex((todo) => todo.id === params.id);
    if (index > -1) {
      db.splice(index, 1);
    }
  },
};

export default todos;
