import BaseLayout from "@components/layouts/BaseLayout";

const Home = () => {
  return (
    <BaseLayout meta={{ title: "Home | Beth Stack" }}>
      <body
        class="flex justify-center items-center min-h-screen container mx-auto px-4"
        hx-get="/todos"
        hx-trigger="load"
        hx-swap="innerHTML"
      />
    </BaseLayout>
  );
};

export default Home;
