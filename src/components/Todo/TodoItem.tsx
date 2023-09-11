import * as elements from "typed-html";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div class="flex gap-4 text-4xl items-center">
      <p class="mr-auto">{todo.content}</p>
      <input class="h-8 w-8" type="checkbox" checked={todo.completed} />
      <button class="bg-red-500 text-white aspect-square p-4" />
    </div>
  );
};

export default TodoItem;
