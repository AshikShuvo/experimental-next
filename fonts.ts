import localFont from "next/font/local";

export const rinsideCompressed = localFont({
  src: [
    {
      path: "./public/fonts/ringside/RingsideCompressed.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./public/fonts/ringside/RingsideCompressed-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--ringside-compressed",
});

export const rinsideNarrow = localFont({
  src: [
    {
      path: "./public/fonts/ringside/RingsideNarrow.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--ringside-narrow",
});
