import * as elements from "typed-html";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div>
      <p>{todo.content}</p>
      <input type="checkbox" checked={todo.completed} />
      <button>X</button>
    </div>
  );
};

export default TodoItem;
