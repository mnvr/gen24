import React from "react";
import { Layout } from "../components";
import { sketch } from "./sketch";

export const Day4: React.FC = () => (
    <Layout day={4} sketch={sketch}>
        <p>
            The prompt for today was "Pixels". Prompt for today was "No
            palettes". Hint text was
        </p>
        <p>
            For this sketch, I created an dot-matrix pixellated display that
            cycles between showing two words, "<b>DO</b>" and "<b>BE</b>"
        </p>
    </Layout>
);
