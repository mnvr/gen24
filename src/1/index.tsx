import React from "react";
// import { createRoot } from "react-dom/client";
// import "../index.css";
import { Layout, DescriptionExtraMarginTop } from "../components";
import { sketch } from "./sketch";

export const Day1: React.FC = () => (
    <Layout day={1} sketch={sketch}>
        <DescriptionExtraMarginTop>
            <p>
                We are defined by our relationships. Not just we, everything.
                Words, concepts, and even quantum states - nothing has any
                inherent selfness of its own but is instead a product of the
                relationships that it is a part of.
            </p>

            <p>
                The prompt for today was _Particles_. The essence I've tried to
                capture is <b>connections</b>.
            </p>
        </DescriptionExtraMarginTop>
    </Layout>
);
