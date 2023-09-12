import { db } from "src/db/db";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div>
      {db.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
