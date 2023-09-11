import * as elements from "typed-html";
import TodoItem from "./TodoItem";

const db: Todo[] = [
  {
    id: 1,
    content: "Lorem ipsum",
    completed: true,
  },
  {
    id: 2,
    content: "Lorem ipsum dolor",
    completed: false,
  },
];

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
