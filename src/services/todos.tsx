import * as elements from "typed-html";
import TodoList from "@components/TodoList";

const todos = {
  get: () => <TodoList />,
};

export default todos;
