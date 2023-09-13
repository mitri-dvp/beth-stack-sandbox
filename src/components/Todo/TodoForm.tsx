const TodoForm = () => {
  return (
    <form
      class="flex gap-4 text-base items-center"
      {...{ "hx-on::after-request": "this.reset()" }}
      hx-post="/todos"
      hx-swap="none"
    >
      <input
        type="text"
        name="content"
        placeholder="Add a to-do..."
        class="border border-gray-500 rounded h-8 px-2 w-full"
      />
      <button
        class="bg-green-500 border border-green-500 text-white aspect-square w-8 h-8 text-base rounded hover:bg-green-600 transition-all"
        type="submit"
      >
        <i class="bi bi-plus"></i>
      </button>
    </form>
  );
};

export default TodoForm;
