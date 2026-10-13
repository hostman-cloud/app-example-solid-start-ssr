import { Title } from "@solidjs/meta";
import { createAsync, query, type RouteDefinition } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";

/* "use server": the function runs only on the server, the browser receives just its result */
const getServerInfo = query(async () => {
  "use server";
  const event = getRequestEvent();

  return {
    renderedAt: new Date().toISOString(),
    nodeVersion: process.version,
    userAgent: event?.request.headers.get("user-agent") ?? "—"
  };
}, "server-info");

export const route = {
  preload: () => getServerInfo()
} satisfies RouteDefinition;

export default function Home() {
  const info = createAsync(() => getServerInfo());

  return (
    <>
      <Title>SolidStart SSR</Title>
      <h1>Home</h1>
      <p class="lead">This page is rendered on the server (SSR) on every request.</p>

      <dl class="info">
        <dt>Rendered at</dt>
        <dd>
          <code>{info()?.renderedAt}</code>
        </dd>
        <dt>Node.js</dt>
        <dd>
          <code>{info()?.nodeVersion}</code>
        </dd>
        <dt>User-Agent</dt>
        <dd>
          <code>{info()?.userAgent}</code>
        </dd>
      </dl>

      <p>
        Refresh the page and the render time will change. API endpoint example:{" "}
        <a href="/api/hello">/api/hello</a>.
      </p>
    </>
  );
}
