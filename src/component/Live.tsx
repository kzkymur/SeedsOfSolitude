import React, { useCallback, useState } from "react";
import style from "@/style/Live.scss";
import Title from "./Title";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import Logo from "./Logo_svg";

type styleProps = {
  className: string;
};

const Live: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={style.wrapper}>
      <Logo className={style.logo} />
      <Title className={style.title} />
      <div className={style.cover}></div>
      <Hamburger className={style.hamburger} checked={checked} setChecked={setChecked}/>
      <Menu className={`${style.menu} ${checked ? style.menuShow : ""}`}/>
      <iframe
        className={style.iframe}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tEGMFkkX4B4?autoplay=1&loop=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="../jquery.mb.YTPlayer.min.js"></script>
    </div>
  );
};

export default Live;
