import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import * as C from "../components";
import { sketch } from "./sketch";

const Page = () => {
    return <h1>Hello world</h1>;
};

const Page2 = () => {
    <C.Layout day={1} sketch={sketch}>
        <C.DescriptionExtraMarginTop>
            <p>
                We are defined by our relationships. Not just we, everything.
                Words, concepts, and even quantum states - nothing has any
                inherent selfness of its own but is instead a product of the
                relationships that it is a part of.
            </p>

            <p>
                The prompt for today was _Particles_. The essence I've tried to
                capture is
                <b>connections</b>.
            </p>
        </C.DescriptionExtraMarginTop>
    </C.Layout>;
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Page />
    </StrictMode>
);
