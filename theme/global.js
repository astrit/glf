import { globalCss } from "$/stitches.config";
import reset from "$/reset";

const gradient = `radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0),radial-gradient(rgba(255,255,255,0.2) 1px,transparent 0), linear-gradient(180deg,hsla(261deg, 80%, 48%, 1),hsla(261deg, 80%, 30%, 1))`;
const fonts = `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;
const fontsv2 = `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji`;

export const style = globalCss({
  ...reset,
  "#__next": {
    height: "100%",
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: fonts,
    backgroundColor: "#5f19dd",
    backgroundImage: gradient,
    backgroundSize: "40px 40px, 40px 40px, cover",
    backgroundPosition: "0 0,20px 20px, center",
    paddding: "8vw",
    color: "white",
    fontWeight: "400",
    fontSize: "32px",
    letterSpacing: "-0.02em",

    "&:before": {
      content: "",
      mixBlendMode: "multiply",
      filter: "url(#noise) grayscale(100)",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      pointerEvents: "none",
      opacity: 0.8,
      backgroundSize: "300px 300px",
    },
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
    position: "relative",
  },
  p: {
    marginBlockStart: "0",
    fontWeight: "350",
  },
  main: {
    gap: "$4",
    display: "flex",
    flexDirection: "column",
  },
});
