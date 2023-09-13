import { TodoSelect as Todo } from "@db/schema";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div
      class="flex flex-col gap-4"
      hx-get="/todos/list"
      hx-trigger="create-todo from:body, delete-todo from:body"
    >
      {todos.length ? (
        <>
          {todos.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </>
      ) : (
        <div>List seems to be empty...</div>
      )}
    </div>
  );
};

export default TodoList;
