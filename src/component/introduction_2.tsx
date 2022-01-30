import React from "react";
import style from "@/style/introduction_2.scss";

interface Props {
  countPage: VoidFunction;
  pageNumber: number;
}

const Introduction_1: React.FC<Props> = (props) => {
  return (
    <div className={style.wrapper}>
        <h1 className={`${style.title} ${props.pageNumber == 3 ? style.titleSmall : ""} ${style.rubrikNewLite}`}>STATEMENT</h1>
        <p className={`${style.yuGothic} ${style.hideJp} ${props.pageNumber == 3 ? style.statementJa : ""}`}>コロナウイルスの影響を受け、狭い人間関係・環境の中での生活により、 閉塞感や孤独感を感じることが多いのではないだろうか。
            人は誰もが孤独であることを忘れてしまう。そこで新たな視点を用いて、孤独感を軽減することはできないかといった試みである。</p>
        <p className={`${style.rubrikNew} ${style.hideEn} ${props.pageNumber == 3 ? style.statementEn : ""}`}>Due to the effects of the coronavirus, people may often feel stagnant and lonely due to living in a narrow relationship and environment. We forget that everyone is lonely.
             So, this is an attempt to see if it is possible to reduce the sense of loneliness by using a new perspective.</p>
    </div>
  );
};

export default Introduction_1;
