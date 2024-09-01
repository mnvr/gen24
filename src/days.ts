import p1 from "./1/preview.png";
import p2 from "./2/preview.png";
import p4 from "./4/preview.png";
import p8 from "./8/preview.png";
import p11 from "./11/preview.png";
import p18 from "./18/preview.png";
import p25 from "./25/preview.png";

export interface Day {
    /** The day of the month this entry is for. */
    day: number;
    /** The prompt for that day. */
    prompt: string;
    /**
     * The color to show for the day's card.
     *
     * This'll be a string that CSS can understand.
     */
    color: string;
    /**
     * An optional string that overrides {@link color} when in dark mode.
     */
    darkColor?: string;
    /** The URL of the preview image. */
    previewImage: string;
}

export const days: Day[] = [
    { day: 1, prompt: "Particles", color: "tomato", previewImage: p1 },
    {
        day: 2,
        prompt: "No palettes",
        color: "rgb(70, 194, 161)",
        previewImage: p2,
    },
    { day: 4, prompt: "Pixels", color: "limegreen", previewImage: p4 },
    { day: 8, prompt: "Chaotic system", color: "silver", previewImage: p8 },
    {
        day: 11,
        prompt: "Anni Albers",
        color: "rgb(215, 204, 180)",
        previewImage: p11,
    },
    {
        day: 18,
        prompt: "Bauhaus",
        color: "rgb(210, 200, 5)",
        darkColor: "rgb(200, 215, 20)",
        previewImage: p18,
    },
    {
        day: 25,
        prompt: "Recreate",
        color: "rgb(220, 60, 70)",
        previewImage: p25,
    },
];
