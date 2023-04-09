import React from "react";
import { Button as MUIButton } from "@mui/material";

function Button({
  className,
  style,
  variant,
  children,
  isLoading,
  ...props
}: any) {
  return (
    <MUIButton
      style={style}
      disabled={isLoading}
      classes={className}
      variant={variant}
      {...props}
    >
      {isLoading ? "Loading..." : null}
      {children}
    </MUIButton>
  );
}

export default Button;
