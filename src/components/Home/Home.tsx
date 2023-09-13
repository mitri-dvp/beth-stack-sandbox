import BaseLayout from "@components/layouts/BaseLayout";

const Home = () => {
  return (
    <BaseLayout meta={{ title: "Home | Beth Stack" }}>
      <body
        class="flex justify-center items-center min-h-screen container mx-auto p-4 sm:px-8 max-w-3xl"
        hx-get="/todos"
        hx-trigger="load"
        hx-swap="innerHTML"
      />
    </BaseLayout>
  );
};

export default Home;
