import { Title } from "@solidjs/meta";

export default function About() {
  return (
    <>
      <Title>About — SolidStart SSR</Title>
      <h1>About</h1>
      <p>
        A basic{" "}
        <a href="https://start.solidjs.com" target="_blank" rel="noopener noreferrer">
          SolidStart
        </a>{" "}
        application with server-side rendering. The server is built by Nitro with the <code>node-server</code>
        preset, routes from the <code>src/routes/</code> folder are registered automatically.
      </p>
    </>
  );
}
