import React from "react";
import { Layout } from "../components";
import { sketch } from "./sketch";

export const Day8: React.FC = () => (
    <Layout day={8} sketch={sketch}>
        <p>
            Prompt for today was "Chaotic system", and this is one using a
            logistic map.
        </p>
        <p>
            There is no randomness in this sketch, it is just repeated
            application of the equation
            <pre>
                <code>x = 3.93 * x * (1 - x)</code>
            </pre>
        </p>
    </Layout>
);
