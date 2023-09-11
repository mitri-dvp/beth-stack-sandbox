import * as elements from "typed-html";

import TodoList from "@components/Todo/TodoList";

const todos = {
  get: () => <TodoList />,
};

export default todos;
