import React, { useCallback, useState } from "react";
import style from "@/style/Live.scss";
import Title from "./Title";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import Logo from "./Logo_svg";

const Live: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={style.wrapper}>
      <Logo className={style.logo} />
      <Title className={style.title} />
      <div className={style.cover}></div>
      <Hamburger
        className={style.hamburger}
        checked={checked}
        setChecked={setChecked}
      />
      <Menu className={`${style.menu} ${checked ? style.menuShow : ""}`} />
      <div className={style.livebg}>
        <h1>生放送は終了しました。</h1>
      </div>
    </div>
  );
};

export default Live;
