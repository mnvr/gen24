import React from "react";
import { Layout, ELink } from "../components";
import { sketch } from "./sketch";

export const Day11: React.FC = () => (
    <Layout day={11} sketch={sketch}>
        <p>
            Prompt for today was "Anni Albers". This is a recreation of one of
            her rugs,
            <ELink href="https://christopherfarr.com/rug/drxvii/">DRXVII</ELink>
            .
        </p>
    </Layout>
);
