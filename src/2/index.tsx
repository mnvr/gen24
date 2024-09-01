import React from "react";
import { Layout } from "../components";
import { sketch } from "./sketch";

export const Day2: React.FC = () => (
    <Layout day={2} sketch={sketch}>
        <p>
            <i>Colors without palettes</i>
        </p>
        <p>
            Prompt for today was "No palettes". Hint text was
            <blockquote>
                Generative colors, procedural colors, emergent colors.
            </blockquote>
        </p>
        <p>
            This sketch is made up of three bouncing photons. Each photon is
            either pure red, pure blue, or pure green energy. As these three
            photons move around the universe, they bathe the universe in their
            own, inherent, light.
        </p>
    </Layout>
);
