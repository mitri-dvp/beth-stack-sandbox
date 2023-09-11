import type { PropsWithChildren } from "@kitajs/html";

type Meta = {
  title: string;
};

const BaseLayout = ({
  children,
  meta,
}: PropsWithChildren & { meta: Meta }) => `<html lang="en">
    <head>
        <title>${meta.title}</title>
        <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
        <link href="/styles.css" rel="stylesheet">
    </head>
    ${children}
</html>`;

export default BaseLayout;
