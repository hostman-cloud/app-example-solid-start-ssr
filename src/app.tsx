import { MetaProvider, Title } from "@solidjs/meta";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart SSR</Title>
          <div class="layout">
            <header class="header">
              <nav class="nav">
                <A href="/" class="logo" end>
                  SolidStart SSR
                </A>
                <A href="/about">About</A>
              </nav>
            </header>
            <main class="main">
              <Suspense>{props.children}</Suspense>
            </main>
          </div>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
