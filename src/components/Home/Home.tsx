import BaseLayout from "@components/layouts/BaseLayout";

const Home = () => {
  return (
    <BaseLayout meta={{ title: "Home | Beth Stack" }}>
      <body
        class="flex justify-center items-center min-h-screen"
        hx-get="/todos"
        hx-trigger="load"
        hx-swap="innerHTML"
      />
    </BaseLayout>
  );
};

export default Home;
