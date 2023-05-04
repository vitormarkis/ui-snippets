import React from "react";
import st from "./styles.module.css";

interface IClockLineButton extends React.ComponentProps<"a"> {}

export function ClockLineButton({ className, ...rest }: IClockLineButton) {
  const _cn = ` ${className ?? ""}`;

  return (
    <a className={st.container + _cn} {...rest}>
      <div className={st.border} />
      <div className={st.background} />
      <div className={st.text}>Enviar</div>
    </a>
  );
}
