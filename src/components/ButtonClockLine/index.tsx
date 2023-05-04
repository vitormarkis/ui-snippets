import React from "react";
import st from "./styles.module.css";

interface IButtonClockLine extends React.ComponentProps<"a"> {}

export function ButtonClockLine({ className, ...rest }: IButtonClockLine) {
  const _cn = ` ${className ?? ""}`;

  return (
    <a className={st.container + _cn} {...rest}>
      <div className={st.border} />
      <div className={st.background} />
      <div className={st.text}>Enviar</div>
    </a>
  );
}
