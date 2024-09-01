import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Index } from "./index.tsx";
import { Day1 } from "./1/index.tsx";
import { Day2 } from "./2/index.tsx";
import { Day4 } from "./4/index.tsx";
import { Day8 } from "./8/index.tsx";
import { Day11 } from "./11/index.tsx";
import { Day25 } from "./25/index.tsx";

const router = createBrowserRouter([
    { path: "/1", element: <Day1 /> },
    { path: "/2", element: <Day2 /> },
    { path: "/4", element: <Day4 /> },
    { path: "/8", element: <Day8 /> },
    { path: "/11", element: <Day11 /> },
    { path: "/25", element: <Day25 /> },
    { path: "/*", element: <Index /> },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
