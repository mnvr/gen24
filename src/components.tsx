import { type P5WrapperProps } from "@p5-wrapper/react";
// import { Link } from "./index"; // TODO
import { useMediaQuery } from "./utils/use-media-query";
import ReactP5WrapperWithFade from "./p5/ReactP5WrapperWithFade";
import * as React from "react";
import styled from "styled-components";

interface DayProps {
    day?: number;
}

type LayoutProps = DayProps & P5WrapperProps;

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
    day,
    sketch,
    children,
}) => {
    return (
        <Layout_>
            <FirstFold>
                <Title day={day} />
                <SketchContainer sketch={sketch} />
            </FirstFold>
            <Description>
                {children}
                {day && <SourceLink day={day} />}
                <Signoff />
            </Description>
            <Footer day={day} />
        </Layout_>
    );
};

export const Signoff: React.FC = () => {
    return (
        <Signoff_>
            <small>
                Manav Rathi
                <br />
                Jan 2024
            </small>
        </Signoff_>
    );
};

const Signoff_ = styled.div`
    margin-block-start: 4.5rem;
    line-height: 27px;
    color: var(--mrmr-secondary-color);
`;

const Layout_ = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
`;

export const FirstFold = styled.div`
    min-height: 98svh;

    display: flex;
    flex-direction: column;
`;

const Title: React.FC<DayProps> = ({ day }) => (
    <Banner
        left="GEN 24"
        right={
            day !== undefined ? `DAY ${day.toString().padStart(2, "0")}` : ""
        }
    />
);

export interface BannerProps {
    left: string;
    right: string;
}

export const Banner: React.FC<BannerProps> = ({ left, right }) => {
    return (
        <Banner_>
            <BannerH>{left}</BannerH>
            <BannerH>{right}</BannerH>
        </Banner_>
    );
};

const Banner_ = styled.div`
    height: 67px;

    display: flex;
    justify-content: space-between;
`;

const BannerH = styled.h3`
    @media (max-width: 900px) {
        margin-inline: 1rem;
    }
    color: var(--mrmr-secondary-color);
    font-weight: 300;
`;

export const SketchContainer: React.FC<P5WrapperProps> = ({ sketch }) => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    return (
        <SketchContainer_>
            <ReactP5WrapperWithFade {...{ sketch, isDarkMode }} />
        </SketchContainer_>
    );
};

const SketchContainer_ = styled.div`
    flex-grow: 1;

    display: flex;
    justify-content: center; /* horizontally */
    align-items: center; /* vertically */
`;

export const Description = styled.div`
    margin-block: 1rem;
    @media (min-width: 800px) {
        margin-block: 2rem;
    }
    @media (max-width: 900px) {
        margin-inline: 1rem;
    }

    max-width: 30rem;

    p {
        line-height: 1.5;
    }

    a {
        font-weight: normal;
    }

    pre {
        /* See: Note: [Styling markdown code blocks] */
        padding-inline: 1rem;
        padding-block: 0.5rem;
        border-radius: 5px;
        background-color: oklch(90% 0 0 / 0.1);
    }

    @media (max-width: 500px) {
        /* Make code blocks smaller on small screens to avoid overflow */
        pre code {
            font-size: 13px;
        }

        pre {
            padding-inline: 0.8rem;
        }
    }
`;

/**
 * Add extra top margin for a description.
 *
 * The {@link Description} for some of the sketches needs a bit more space at
 * the top to separate it out from the sketch, especially when the sketch has a
 * diffuse boundary. This is a convenience component to do that, it increases
 * the margin-block from 1rem (default for mobile sized screens) to 2rem always.
 */
export const DescriptionExtraMarginTop = styled.div`
    margin-block: 2rem;
`;

const Footer: React.FC<DayProps> = ({ day }) => {
    return (
        <Footer_>
            {day !== undefined && (
                <p>
                    <a href="/">Back</a>
                </p>
            )}
        </Footer_>
    );
};

const Footer_ = styled.div`
    margin-block: 3rem;
    @media (max-width: 900px) {
        margin-inline: 1rem;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.5rem;
    }
`;

interface SourceLinkProps {
    day: number;
}

/**
 * A link to the source code – "sketch.tsx" – for the given day.
 */
const SourceLink: React.FC<SourceLinkProps> = ({ day }) => {
    return (
        <SourceLink_>
            <ELink
                href={`https://github.com/mnvr/gen24/blob/main/pages/${day}/sketch.tsx`}
            >
                Source code for the sketch
            </ELink>
        </SourceLink_>
    );
};

const SourceLink_ = styled.p`
    margin-block-start: 2rem;
`;

/** A link that opens in an new tab, with an indicator. */
export const ELink: React.FC<
    React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, ...props }) => {
    return (
        <a target="_blank" rel="noopener" {...props}>
            {children}{" "}
            <sup>
                <small>↗</small>
            </sup>
        </a>
    );
};
