import { styled } from "@/theme";
import Symbol from "./symbol";
import { forwardRef } from "react";
import Raycast from "./raycast";
import Github from "./github";

const SVGMap = styled("svg", { display: "none" });

export const SVG = forwardRef(
  ({ width, height, name, children, w, h, ...props }, ref) => {
    return (
      <SVGMap ref={ref}>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="6.29"
            numOctaves="6"
            stitchTiles="stitch"
          />
        </filter>
        <Symbol name="Raycast" box="0 0 14 14">
          <Raycast />
        </Symbol>
        <Symbol name="Github" box="0 0 14 14">
          <Github />
        </Symbol>
      </SVGMap>
    );
  }
);

SVG.displayName = "SVG";

export default SVG;
