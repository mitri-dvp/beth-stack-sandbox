import { db } from "src/db/db";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div
      class="flex flex-col gap-4"
      hx-get="/todos/list"
      hx-trigger="new-todo from:body"
    >
      {db.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
