import React from "react";
import { Layout } from "../components";
import { sketch } from "./sketch";

export const Day25: React.FC = () => (
    <Layout day={25} sketch={sketch}>
        <p>
            Prompt for today was "Recreate". This sketch recreates a Finlayson
            tablecloth that I have (and love!).
        </p>
        <p>The secret sauce is from Monsieur Bézier.</p>
    </Layout>
);
