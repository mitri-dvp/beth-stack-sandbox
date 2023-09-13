const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div class="flex gap-4 text-xl items-center">
      <p class="mr-auto">{todo.content}</p>
      <button
        class="w-8 h-8 rounded border border-gray-500 flex justify-center items-center active:text-gray-400 active:border-gray-400 transition-all"
        hx-put={`/todos/toggle/${todo.id}`}
        hx-trigger="click"
        hx-target="closest div"
        hx-swap="outerHTML"
      >
        {todo.completed ? <i class="bi bi-check"></i> : null}
      </button>
      <button
        class="bg-red-500 border border-red-500 text-white aspect-square w-8 h-8 text-base rounded hover:bg-red-600 transition-all"
        hx-delete={`/todos/${todo.id}`}
        hx-trigger="click"
        hx-target="closest div"
        hx-swap="outerHTML"
      >
        <i class="bi bi-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
