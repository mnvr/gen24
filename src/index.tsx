// import { Link } from "gatsby";
import { useMediaQuery } from "./utils/use-media-query";
import * as React from "react";
import styled from "styled-components";
import { Layout, ELink } from "./components";
import { sketch } from "./cover";
import { days, type Day } from "./days";

export const Link: React.FC<React.PropsWithChildren> = ({ children }) => (
    <span>{children}</span>
);

export const Index: React.FC = () => {
    return (
        <Layout sketch={sketch}>
            <Description />
            <DayList />
            <Description2 />
        </Layout>
    );
};

const Description: React.FC = () => {
    return (
        <>
            <p>
                Genuary is an month-long online art fair (that's one way of
                putting it!) that happens every year, in, you guessed it,
                January.
            </p>
            <p>
                This year, I've constrained myself to use only grids. So this is
                like a Griduary too.
            </p>
            <p>
                I'm using p5.js to make these sketches, and the{" "}
                <ELink href="https://github.com/mnvr/gen24">
                    source code for all of these is available on GitHub
                </ELink>
                .
            </p>
        </>
    );
};

const Description2: React.FC = () => {
    return (
        <>
            <p>
                For <b>Day 14</b>, I made a{" "}
                <ELink href="https://mnvr.github.io/gm1k">
                    song in 410 bytes of JS
                </ELink>
                . For <b>Day 31</b>, I made another one{" "}
                <ELink href="https://mnvr.github.io/gm1k/e">
                    using Euclidean rhythms
                </ELink>
                .
            </p>
            <p>
                I also created{" "}
                <Link to="cover">
                    a tutorial to show how much can be done just by basic grids
                </Link>{" "}
                - I start with the simplest possible grid, and derive the cover
                art that you see at the top.
            </p>
            <p>Have a great and inspiring 2024.</p>
        </>
    );
};

const DayList: React.FC = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const withColorAdjustment = (day: Day): Day => {
        const color = (isDarkMode ? day.darkColor : day.color) ?? day.color;
        return { ...day, color };
    };

    return (
        <DayUL>
            {days.map((day, i) => (
                <li key={i}>
                    <DayCard
                        day={withColorAdjustment(day)}
                        previewImage={day.previewImage}
                    />
                </li>
            ))}
        </DayUL>
    );
};

const DayUL = styled.ul`
    margin-block: 2rem;

    /* Remove default list formatting */
    list-style: none;
    padding-inline-start: 0;

    /* Give the list items a horizontal inset, but only on larger screens */
    @media (min-width: 500px) {
        margin-inline: 1rem;
    }

    li {
        margin-block: 1rem;
    }
`;

type DayCardProps = {
    day: Day;
    previewImage: string;
};

const DayCard: React.FC<DayCardProps> = ({ day, previewImage }) => {
    return (
        <Link to={`${day.day}`}>
            <DayCard_ color={day.color} $previewImage={previewImage}>
                <DayDescription {...day} /> »
            </DayCard_>
        </Link>
    );
};

interface DayCardProps_ {
    color: string;
    $previewImage: string;
}

const DayCard_ = styled.div<DayCardProps_>`
    background-image: linear-gradient(
            to right,
            var(--mrmr-background-color) 50%,
            transparent
        ),
        url(${(props) => props.$previewImage});
    background-position: top right;
    background-size: auto 101px;

    /* The fixed height of the background is 101px. Add 2px for the borders. */
    min-height: 103px;
    box-sizing: border-box;
    border: 1px solid ${(props) => props.color};

    padding-inline: 1.5rem;

    display: flex;
    align-items: center;
    gap: 0.7rem;

    svg {
        color: var(--mrmr-secondary-color);
    }

    &:hover {
        color: ${(props) => props.color};

        svg {
            color: ${(props) => props.color};
        }
    }
`;

const DayDescription: React.FC<Day> = ({ day, prompt, color }) => {
    return (
        <p>
            <b>{`Day ${day}`}</b>
            <span style={{ color }}> · </span>
            <i>{prompt}</i>
        </p>
    );
};
