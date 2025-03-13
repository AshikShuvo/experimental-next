import localFont from "next/font/local";

export const font1 = localFont({
  src: [
    {
      path: "./public/fonts/ringside/RingsideCompressed.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./public/fonts/ringside/RingsideCompressed-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--ringside-compressed",
});

export const font2 = localFont({
  src: [
    {
      path: "./public/fonts/ringside/RingsideNarrow.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--ringside-Narrow",
});
