import BaseLayout from "@layouts/BaseLayout";
import * as elements from "typed-html";

const home = {
  get: () => (
    <BaseLayout meta={{ title: "Home | Beth Stack" }}>
      <body hx-get="/todos" hx-trigger="load" hx-swap="innerHTML" />
    </BaseLayout>
  ),
};

export default home;
