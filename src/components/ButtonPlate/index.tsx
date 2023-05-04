import st from "./style.module.css";
interface IButtonPlate extends React.ComponentProps<"a"> {}

export function ButtonPlate({ className, ...rest }: IButtonPlate) {
  const _cn = ` ${className ?? ""}`;

  return (
    <a className={st.container + _cn} {...rest}>
      <div className={st.plateBorder} />
      <div className={st.reflectBorder} />
      <button className={st.text}>Enviar</button>
    </a>
  );
}
