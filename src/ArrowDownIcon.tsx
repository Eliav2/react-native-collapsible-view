import React from "react";
import Svg, { Linecap, Linejoin, Polyline, SvgProps } from "react-native-svg";
import { PolylineProps } from "react-native-svg/src/elements/Polyline";

export interface ArrowDownIconStyling {
  size?: number;
  thickness?: number;
  color?: string;
  rounded?: boolean;
  svgProps?: SvgProps;
  polylineProps?: PolylineProps;
}

export default function ArrowDownIcon({
  size: s = 24,
  thickness = s / 16,
  color = "black",
  rounded = false,
  svgProps = {},
  polylineProps = {},
}: ArrowDownIconStyling) {
  const roundedCorners = rounded
    ? { strokeLinecap: "round" as Linecap, strokeLinejoin: "round" as Linejoin }
    : {};
  return (
    <Svg width={s} height={s} {...svgProps}>
      <Polyline
        points={`${s / 6} ${s / 3} ${s / 2} ${s / 1.5} ${s / 1.2} ${s / 3}`}
        stroke={color}
        strokeWidth={`${thickness}`}
        fill="none"
        {...roundedCorners}
        {...polylineProps}
      />
    </Svg>
  );
}
