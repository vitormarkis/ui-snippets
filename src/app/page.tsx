import { ButtonPlate } from "@/components/ButtonPlate";
import { ButtonClockLine } from "@/components/ButtonClockLine";
import st from "./page.module.css";

export default function Home() {
  return (
    <div className={st.inner_section}>
      <div className={st.heading_section}>
        <h1 className={st.title}>UI Snippets</h1>
        <p className={st.heading_subtitle}>by Vitor Markis</p>
      </div>
      <div className={st.snippets_section}>
        <div className={st.snippet_container}>
          <ButtonPlate />
        </div>
        <div className={st.snippet_container}>
          <span className={st.hoverable}>hoover</span>
          <ButtonClockLine />
        </div>
      </div>
    </div>
  );
}
