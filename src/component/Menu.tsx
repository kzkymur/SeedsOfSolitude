import React from "react";
import style from "@/style/Menu.scss";
import { useHistory } from "react-router-dom";

type Props = {
  className: string;
};

const Menu: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div className={`${style.menu} ${props.className}`}>
      <h1 onClick={()=>history.push("/")} className={style.link}>STATEMENT</h1>
      <h1 onClick={()=>history.push("/flowers")} className={style.link}>FLOWERS</h1>
      <a href="" className={`${style.link} ${style.twitter}`}>
        TWITTER
      </a>
    </div>
  );
};

export default Menu;
