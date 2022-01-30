import React, { useCallback, useState } from "react";
import style from "@/style/Home.scss";
import Introduction_1 from "./introduction_1";
import Introduction_2 from "./introduction_2";
import Intro_template from "./intro_template";
import Page4Png from "@/img/page4.png";
import Page5Png from "@/img/page5.png";
import Page6Png from "@/img/page6.png";

const Home: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const countPage = useCallback(() => {
    setPageNumber((prev) => prev + 1);
  }, []);

  const decountPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  return (
    <div
      className={`${style.wrapper} ${
        pageNumber == 3 ? style.wrapperBlack : ""
      }`}
    >
      <Introduction_1 countPage={countPage} pageNumber={pageNumber} />
      {(pageNumber == 1 || pageNumber == 2 || pageNumber == 3) && (
        <Introduction_2 countPage={countPage} pageNumber={pageNumber} />
      )}
      {(pageNumber == 3 || pageNumber == 4 || pageNumber == 5) && (
        <Intro_template
          pageNumber={pageNumber}
          title={"日々の会話"}
          png={Page4Png}
          intro_number={1}
          sentence_ja={
            "相互に影響しあっている。あなたの表情・声は相手に入力され続けている。"
          }
          sentence_en={
            "They are mutually influencing each other.Your expression and voice Your facial expressions and voice are continuously being input to the other person."
          }
        />
      )}
      {(pageNumber == 4 || pageNumber == 5 || pageNumber == 6) && (
        <Intro_template
          pageNumber={pageNumber}
          title={"ツイッター"}
          png={Page5Png}
          intro_number={2}
          sentence_ja={
            "ツイートをすると、インターネットと繋がり、他者に認識される。"
          }
          sentence_en={
            "When you tweet, you connect to the Internet When you tweet, you are connected to the Internet and recogniz ed by others."
          }
        />
      )}
      {(pageNumber == 5 || pageNumber == 6 || pageNumber == 7) && (
        <Intro_template
          pageNumber={pageNumber}
          title={"ツイートする瞬間"}
          png={Page6Png}
          intro_number={3}
          sentence_ja={
            "ツイートする瞬間は他者・世界共に認識されていない「孤独」な状態である。"
          }
          sentence_en={
            "At the moment of tweeting, you are unrecognized by others and the world. It is a state of solitude."
          }
        />
      )}
      <button className={style.debug} onClick={decountPage}>
        デバッグ用Page戻るボタン
      </button>
    </div>
  );
};

export default Home;
