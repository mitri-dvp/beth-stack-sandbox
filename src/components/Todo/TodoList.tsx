import { db } from "src/db/db";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  return (
    <div class="flex flex-col gap-4">
      {db.map((todo) => (
        <TodoItem todo={todo} />
      ))}
      <TodoForm />
    </div>
  );
};

export default TodoList;
