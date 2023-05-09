import st from "./style.module.css";
interface IButtonClockLineMask extends React.ComponentProps<"button"> {}

export function ButtonClockLineMask({
  className,
  ...rest
}: IButtonClockLineMask) {
  const _cn = ` ${className ?? ""}`;

  return (
    <button className={st.container + _cn} {...rest}>
      <div className={st.border} />
      <span className={st.text}>Enviar</span>
    </button>
  );
}
