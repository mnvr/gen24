import React from "react";
import { Layout, ELink } from "../components";
import { sketch } from "./sketch";

export const Day18: React.FC = () => (
    <Layout day={18} sketch={sketch}>
        <p>
            Prompt for today was "Bauhaus". This sketch tries to recreate the
            Bauhaus vibe using the three primary forms posited by the school's
            teachers.
        </p>
    </Layout>
);
