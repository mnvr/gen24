import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Index } from "./index.tsx";
import { Day1 } from "./1/index.tsx";

const router = createBrowserRouter([
    { path: "/1", element: <Day1 /> },
    { path: "/*", element: <Index /> },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
