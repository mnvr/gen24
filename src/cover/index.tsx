import { sketch as s01 } from "./01";
import { sketch as s02 } from "./02";
import { sketch as s03 } from "./03";
import { sketch as s04 } from "./04";
import { sketch as s05 } from "./05";
import { sketch as s06 } from "./06";
import { sketch as s07 } from "./07";
import { sketch as s08 } from "./08";
import { sketch as cover } from "../cover.tsx";
import React from "react";
import { Layout, Demo } from "./components.tsx";

export const Cover: React.FC = () => {
    return (
        <Layout>
            <D1 />
            <D2 />
            <D3 />
            <D4 />
            <D5 />
            <D6 />
            <D7 />
            <D8 />
            <DEnd />
        </Layout>
    );
};

const D1: React.FC = () => (
    <Demo n={1} sketch={s01}>
        <p>A minimal straight grid.</p>

        <p>
            At its essence, the code for drawing it is just a glorified wrapper
            around two nested loops.
        </p>

        <pre>
            <code>{`for (let y = 0; y < 13; y += 1)
for (let x = 0; x < 13; x += 1)
p5.rect(x * 50, y * 50, 50, 50)
`}</code>
        </pre>
    </Demo>
);

const D2: React.FC = () => (
    <Demo n={2} sketch={s02}>
        <p>A minimal staggered grid.</p>

        <p>
            We can add a half a cell offset to every alternate row. This gives
            us a staggered, less monotonous, appearance. Bricklayers found out
            that intertwining this way leads to buildings that are stronger.
        </p>
    </Demo>
);

const D3: React.FC = () => (
    <Demo n={3} sketch={s03}>
        <p>Negative space.</p>

        <p>
            Here we rotate the rectangles by 45°, and make them smaller. This
            common motif keeps brains entertained because of the negative space.
            It is no longer one thing, but two images intertwined in the same
            visual.
        </p>
    </Demo>
);

const D4: React.FC = () => (
    <Demo n={4} sketch={s04}>
        <p>
            We can do the same thing, but not stagger. This'll give us marble
            floors, and chess boards.
        </p>
    </Demo>
);

const D5: React.FC = () => (
    <Demo n={5} sketch={s05}>
        <p>
            If we don't reduce the size of the squares before rotating them,
            they will start overlapping, but there would still be negative space
            in the places where there is no overlap.
        </p>
    </Demo>
);

const D6: React.FC = () => (
    <Demo n={6} sketch={s06}>
        <p>
            If we reintroduce the staggering of the alternate rows, they'll fit
            back in nicely, just like how they were in DEX 02 above.
        </p>

        <p>
            In the last two DEXs, we're animating their rotation to show how
            they fit back in, but the animation also shows the variety of
            effects that can already be produced.
        </p>

        <p>
            We could keep exploring these variations, but let us get back to DEX
            03 - the one with the staggered, smaller, and rotated, squares. DEX
            03 is a common motif in Indian, African and many other artworks
            (this is the Holiday season, so you'd have probably recently seen it
            in Christmas sweaters too!).
        </p>

        <p>
            Part of the popularity probably has to do with how easy it is to
            make, but I feel it also has to do with the "necker cube" like
            phenomena it exhibits - how it changes shape if we stare at it for a
            while.
        </p>

        <p>
            But the next modification blew my mind when I first chanced upon it.
            By adding a single rectangle to each cell, we can convert this
            simple motif into an isometric grid!
        </p>
    </Demo>
);

const D7: React.FC = () => (
    <Demo n={7} sketch={s07}>
        <p>Isometric grid.</p>

        <p>
            I just added one extra rectangle (a quadrilateral, but we can just
            think of it as a skewed rectangle) to each cell. In fact, this is
            the code for the function that draws each cell - first quad is the
            original (rotated) square we already drew for DEX 03, and the second
            quad is the new one:
        </p>

        <pre>
            <code>{`m = s / 2 /* mid-point of side s */
quad(x, y, x+m, y-m, x+s, y, x+m, y+m)
quad(x, y, x+m, y+m, x+m, y+s, x, y+m)
`}</code>
        </pre>

        <p>
            Now, I don't know if this is the best way to draw an isometric grid,
            or if this is indeed even an isometric grid technically. I'm an
            artist by aspiration, not by ability or training, so I'm just
            amateuring around. But the simplicity of this formulation did blow
            my mind.
        </p>

        <p>
            I guess this is perhaps because I personally have been enamoured by
            the isometric grid (I _think_ that's what this is called), other
            people might indeed find it cliche. I had a carpet once, €20 only,
            that had a basic grayscale isometric pattern, and I would stare at
            it for more time than I'll acknowledge here, trying to figure out
            which direction the cubes were facing.
        </p>

        <p>
            Making these on the computer, I've come across one more aspect of
            ambiguity: sometimes I start seeing these not as cubes, but as
            diagonal lines of "kites". Perhaps you can see what I'm talking
            about - focus on the negative space, and see how they form lines of
            "four sided triangles" flowing towards the top right of the figure.
        </p>

        <p>From this to the cover is just a matter of adding colors.</p>
    </Demo>
);

const D8: React.FC = () => (
    <Demo n={8} sketch={s08}>
        <p>
            I've added a different color for each of the three "faces" (there
            really are only two faces, the third face is the background, the
            negative space).
        </p>

        <p>
            Notice how now there is not one but two different sets of kites
            flying around (one red, and one green). And the necker cubes, facing
            this way or that (shifting based on I don't know what part of my
            perception), are still there.
        </p>
    </Demo>
);

const DEnd: React.FC = () => (
    <Demo sketch={cover}>
        <p>
            The final cover has a few more tweaks - there is no stroke, and the
            colors were taken from the isometric-ish cover of a notebook I have
            (Carpets, notebooks. <i>Doctor, I have an isometric grid problem</i>
            ). On the notebook the top face (the yellow part) is also a bit
            "thinner", which causes another, the third, set of "kites" flying
            around, this time horizontally, and I've done the same.
        </p>
    </Demo>
);
