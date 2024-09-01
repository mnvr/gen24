import { type P5WrapperProps } from "@p5-wrapper/react";
import { Link } from "./index";
import { useMediaQuery } from "./utils/use-media-query";
import ReactP5WrapperWithFade from "./p5/ReactP5WrapperWithFade";
import * as React from "react";
import styled from "styled-components";
import { zeroPad2 } from "./utils/string";

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

/**
 * Author and date in subdued, small text.
 *
 * Designed for use at bottom of the page, after the text content.
 */
export const Signoff: React.FC = () => {
    return (
        <Signoff_>
            <SignoffContents />
        </Signoff_>
    );
};

const Signoff_ = styled.div`
    margin-block-start: 4.5rem;
    line-height: 27px;
    color: var(--mrmr-secondary-color);
`;

export const SignoffContents: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
    props
) => {
    // const page = ensure(React.useContext(BuildTimePageContext));
    const formattedSignoffDate = "Jan 2024";

    return (
        <div {...props}>
            <small>
                Manav Rathi
                <br />
                {formattedSignoffDate}
            </small>
        </div>
    );
};

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
        right={day !== undefined ? `DAY ${zeroPad2(day)}` : "BEGIN"}
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

export const Description: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <LinkStyleUnderlined>
            <Description_>{children}</Description_>
        </LinkStyleUnderlined>
    );
};

const Description_ = styled.div`
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
 * the margin-block from "1rem" (default for mobiles) to "2rem" always.
 */
export const DescriptionExtraMarginTop = styled.div`
    margin-block: 2rem;
`;

const Footer: React.FC<DayProps> = ({ day }) => {
    return (
        <LinkStyleUnderlined>
            <Footer_>
                {day !== undefined && (
                    <p>
                        <Link to="/gen24">All days</Link>
                    </p>
                )}
                <p>
                    <Link to="/">Home</Link>
                </p>
            </Footer_>
        </LinkStyleUnderlined>
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
export const SourceLink: React.FC<SourceLinkProps> = ({ day }) => {
    return (
        <SourceLink_>
            <ELink
                href={`https://github.com/mnvr/mrmr.io/blob/main/pages/gen24/${day}/sketch.tsx`}
            >
                Source code for the sketch
            </ELink>
        </SourceLink_>
    );
};

const SourceLink_ = styled.p`
    margin-block-start: 2rem;
`;

/**
 * A container that styles links (<a> elements) within its children to have a
 * yellow hover background.
 */
export const LinkStyleHover = styled.div`
    a:hover {
        background-color: hsl(60, 100%, 85%);
        color: oklch(40% 0 0);
        @media (prefers-color-scheme: dark) {
            background-color: yellow;
            color: oklch(20% 0 0);
        }
    }
`;

/**
 * A container that styles links (<a> elements) within its children to behave
 * like "old-school" HTML links.
 *
 * - Links will have a blue underline. Visited links will have a purple
 *   underline.
 *
 * - Hover state will show a yellow background.
 */
export const LinkStyleUnderlined = styled(LinkStyleHover)`
    a {
        text-decoration: none;
        border-bottom: 1px solid blue;
        font-weight: 500;
    }

    @media (prefers-color-scheme: dark) {
        a {
            border-bottom-color: royalblue;
        }
    }

    a:visited {
        border-bottom-color: purple;
    }

    a:hover {
        border-bottom-color: transparent;
    }
`;

// import React from "react";
// import { ImArrowUpRight2 } from "react-icons/im";
// import { RxArrowTopRight } from "react-icons/rx";
// import styled from "styled-components";

/**
 * A link that opens in an new tab
 *
 * @see also {@link ExternalLinkWithIcon}.
 * */
export const ExternalLink: React.FC<
    React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, ...props }) => {
    // Newer browsers implicitly add rel="noopener" for target="_blank", but
    // support is still not 100% though and it's easy to add explicitly, so
    // might as well.
    return (
        <a target="_blank" rel="noopener" {...props}>
            {children}
        </a>
    );
};

/**
 * A link that opens in an new tab, with an indicator.
 *
 * This is a variant of {@link ExternalLink} that shows an outward (top right)
 * facing arrow icon after the children to indicate that the link will open in a
 * new tab.
 *
 * There is also a shorter alias, {@link ELink}.
 * */
export const ExternalLinkWithIcon: React.FC<
    React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, ...props }) => {
    return (
        <a target="_blank" rel="noopener" {...props}>
            {children}↗ {/* <RxArrowTopRight /> */}
        </a>
    );
};

/** An alias for {@link ExternalLinkWithIcon} */
export const ELink = ExternalLinkWithIcon;
