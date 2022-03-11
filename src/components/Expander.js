import React from "react";
import colors from "../constants/colors";
import { Icon } from "material-bread";
export const Expander = ({ expanded, style }) => {
  return (
    <Icon
      size={24}
      name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
      color={colors.faded}
      style={style}
    />
  );
};
