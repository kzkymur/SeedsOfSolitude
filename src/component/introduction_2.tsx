import React from "react";
import style from "@/style/introduction_2.scss";

interface Props {
  countPage: VoidFunction;
  pageNumber: number;
}

const Introduction_1: React.FC<Props> = (props) => {
  return (
    <div className={style.wrapper}>
        <h1 className={`${style.title} ${style.rubrikNewLite}`}>STATEMENT</h1>
    </div>
  );
};

export default Introduction_1;
