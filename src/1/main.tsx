import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

import { Page } from "./index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Page />
    </StrictMode>
);
