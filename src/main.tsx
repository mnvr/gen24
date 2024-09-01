import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Index } from "./index.tsx";
import { Day1 } from "./1/index.tsx";

const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    { path: "/1", element: <Day1 /> },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
