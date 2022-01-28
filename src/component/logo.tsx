import React from "react";
import style from "@/style/logo.scss";
import LogoSvg from "@/img/logo.svg";

type Props = {
  className: string;
};

const Logo: React.FC<Props> = (props) => {
  return (
      <img className={props.className} src={LogoSvg} />
  );
};

export default Logo;
