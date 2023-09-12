import TodoItem from "@components/Todo/TodoItem";
import TodoList from "@components/Todo/TodoList";
import { db } from "src/db/db";

const todos = {
  get: () => <TodoList />,
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
