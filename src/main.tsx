import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Index } from "./index.tsx";
import { Cover } from "./cover/index.tsx";
import { Day1 } from "./1/index.tsx";
import { Day2 } from "./2/index.tsx";
import { Day4 } from "./4/index.tsx";
import { Day8 } from "./8/index.tsx";
import { Day11 } from "./11/index.tsx";
import { Day18 } from "./18/index.tsx";
import { Day25 } from "./25/index.tsx";

// We use react-router, since Vite's MPA support is patchy. But react-router's
// Link causes problems with scroll going all over the place. To keep things
// simple, we take the worst of both worlds. A SPA with HTML navigation.

const router = createBrowserRouter([
    { path: "/gen24/1", element: <Day1 /> },
    { path: "/gen24/2", element: <Day2 /> },
    { path: "/gen24/4", element: <Day4 /> },
    { path: "/gen24/8", element: <Day8 /> },
    { path: "/gen24/11", element: <Day11 /> },
    { path: "/gen24/18", element: <Day18 /> },
    { path: "/gen24/25", element: <Day25 /> },
    { path: "/gen24/cover", element: <Cover /> },
    { path: "/gen24/*", element: <Index /> },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
