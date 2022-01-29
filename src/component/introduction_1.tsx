import React from "react";
import style from "@/style/introduction_1.scss";
import Logo from "./logo";
import Button from "./button";

type styleProps = {
  className: string;
};

interface Props {
  countPage: VoidFunction;
  pageNumber: number;
}

const Introduction_1: React.FC<Props> = (props) => {
  return (
    <div className={style.wrapper}>
      <h3 className={`${style.rubrikNew} ${style.seminarName} ${props.pageNumber == 1 ? "" : style.nonSeminarName}`}>
        HYBRID ART PRACTICE 2022
      </h3>
      <Logo className={`${style.logo} ${props.pageNumber == 1 ? "" : style.headerLogo}`} />
      <Title className={`${style.title} ${props.pageNumber == 1 ? "" : style.headerTitle}`} />
      <h3 className={`${style.rubrikNew} ${style.credit} ${props.pageNumber == 1 ? "" : style.nonCredit}`}>
        Konosuke Hirato / Makoto Tanikubo / Yo Tanaka<br />Shun Sasaguri / Takumi Yokoyama / Kazuki Yamaura
      </h3>
      <Button className={style.button} countPage={props.countPage}  pageNumber={props.pageNumber} />
    </div>
  );
};


const Title: React.FC<styleProps> = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 416.26 76.43"
    >
      <g id="レイヤー_2" data-name="レイヤー 2">
        <g id="レイヤー_1-2" data-name="レイヤー 1">
          <path d="M10.5,34.71c0,2.17-2.6,4.58-5.1,4.58a.5.5,0,0,1-.54-.38C4.46,38,3.63,37.71,1,37.38c-.29-.05-.39-.34-.39-.67s.19-.79.49-.79h.05c1.37.12,2.94.29,4.36.29,1.62,0,2.51-.87,2.51-2V22.72a1,1,0,0,0-1.25-.91c-1.53.48-2.93.88-4,1.18v.37c0,.88-.25,1.33-.64,1.33S1,24.32,0,20.62H.29a40.65,40.65,0,0,0,7-1.23,1,1,0,0,0,.72-.92V13.72a16,16,0,0,0-.25-3.16c.38,0,.71.09,1,.14a1,1,0,0,0,1-.44,49,49,0,0,0,2.46-4.62,1,1,0,0,0-.87-1.36H8.58c-1.33,0-4.56,0-6.69.19A.94.94,0,0,1,1,3.91v0a1,1,0,0,1,.93-1.34c2.32.13,5.43.19,6.76.19l3.82.07a1,1,0,0,0,.77-.36,9.39,9.39,0,0,1,.71-.83.33.33,0,0,1,.3-.17.19.19,0,0,1,.14,0,10,10,0,0,1,2.21,1.62,1.75,1.75,0,0,1,.69,1.13c0,.63-.88.9-1.84,1.13a.94.94,0,0,0-.53.34c-1.41,1.83-2.47,3.69-4,5.43.3.12.59.33.59.62s-.2.51-.58.71a1,1,0,0,0-.55.86v4a1,1,0,0,0,1.23.92c2-.58,3.92-1.21,5.59-1.86h.1c.19,0,.39.41.39.83,0,.25-.05.5-.24.58A66.82,66.82,0,0,1,11,20.43a1,1,0,0,0-.63.9v8.1c0,.75.15,4.45.15,5.2Zm36.59,3.46A5.16,5.16,0,0,0,44.3,39a.45.45,0,0,1-.25,0,.3.3,0,0,1-.29-.13C39,32.68,37.53,20.54,37.53,7.48c0-.87,0-1.75,0-2.64a1,1,0,0,0-1.1-1c-1.64.26-3.32.49-5,.71a1,1,0,0,0-.83.94V31.84a1,1,0,0,0,1.09.95c1.1-.15,2.16-.31,3.14-.47a1,1,0,0,0,.68-1.4,33.44,33.44,0,0,0-3.39-5.15.5.5,0,0,1-.1-.24c0-.3.35-.55.69-.55,1.08,0,7.51,8.82,7.51,10.9,0,.16-.2,2.29-1.38,2.29-.63,0-1-.84-1.22-2a14.73,14.73,0,0,0-.7-2.22,1,1,0,0,0-1.14-.55,130.1,130.1,0,0,1-13.34,2.68.94.94,0,0,0-.79.73c-.12.49-.37.9-.71.9s-1-.59-1.63-2.85a1,1,0,0,1,.93-1.19h.55c.59,0,1.18,0,1.42,0,1.49,0,3.24-.16,5.09-.36a1,1,0,0,0,.85-1V6a1,1,0,0,0-1.06-1c-1.62.17-3.2.31-4.66.41a1,1,0,0,0-.88,1c.05,1.75.12,3.6.12,5.11,0,10.94-1.37,21.54-9.42,28.32A.28.28,0,0,1,12,40c-.39,0-.88-.41-.88-.74a.32.32,0,0,1,.09-.21c5.79-5.33,8-13.85,8-26a44.83,44.83,0,0,0-.57-8.63,1,1,0,0,1,1.32-1.06c.5.23,1,.48,1.5.76a.9.9,0,0,0,.55.13C24.9,3.91,36.7,2.77,40.44.49a1,1,0,0,1,1.11.08C43.06,1.81,43.42,2.62,43.42,3s-.59.46-.64.46a2.79,2.79,0,0,1-1.16-.34A1,1,0,0,0,41,3l-1.15.25a1,1,0,0,0-.77.94V5.57c0,12.68,1.72,26.36,8.58,31.81a.28.28,0,0,1,.1.16c0,.25-.24.63-.49.63Z" />
          <path d="M124.44,35.5a20.87,20.87,0,0,0,5.25,1,2.46,2.46,0,0,0,2.26-1C133.42,33.18,134,28.06,134,24a29.43,29.43,0,0,0-.41-5,.51.51,0,0,0-.94-.17,37.55,37.55,0,0,1-9.54,10.43,1,1,0,0,1-.79-.75.3.3,0,0,1,.1-.21,36.81,36.81,0,0,0,9.85-14,.53.53,0,0,0,0-.35,27.32,27.32,0,0,0-1.66-3.84.52.52,0,0,0-.83-.11c-3.76,3.75-6.39,5.16-6.57,5.16a.85.85,0,0,1-.74-.75.37.37,0,0,1,.2-.33A32.48,32.48,0,0,0,129,8.24a.53.53,0,0,0,0-.63,24.59,24.59,0,0,0-4.74-5,.36.36,0,0,1-.19-.33.78.78,0,0,1,.78-.66c.47,0,2.84,1.76,5.08,4.43a.51.51,0,0,0,.81,0A18.08,18.08,0,0,0,133.54.9a.51.51,0,0,1,.63-.39c1.21.34,3.22,1,3.22,1.81,0,.42-.63.75-1.66.75h-.2a41.62,41.62,0,0,1-3.67,4.82.51.51,0,0,0,0,.62,29.9,29.9,0,0,1,4.64,16.35c0,11-3.14,15-7.06,15a.65.65,0,0,1-.74-.5c-.44-1.2-.73-1.33-4.61-2.58a.45.45,0,0,1-.29-.45c0-.42.29-.88.58-.88Zm42.34-9.64c0,.62-1,.91-1.67.91s-1.08-.16-1.08-.62c0-.08.05-.87.05-1.21V23.65h-8.86a.51.51,0,0,0-.51.52v9.47a.52.52,0,0,0,.58.51c2.93-.35,5.79-.69,8-1a.52.52,0,0,0,.33-.84,32,32,0,0,0-4-3.86.28.28,0,0,1-.1-.25.81.81,0,0,1,.73-.71c.59,0,9.52,6,9.52,10.27,0,1.21-.64,2.2-1.27,2.2s-1-.54-1.53-1.87a26.89,26.89,0,0,0-1.72-3.48.5.5,0,0,0-.53-.24c-6.08,1.18-19.53,3-24.14,3.55a.51.51,0,0,0-.44.44c-.14.87-.48,1.35-.74,1.35-1,0-1.64-2.14-2-3.56a.53.53,0,0,1,.52-.64h1.39c2.19,0,7.29-.47,12.44-1a.51.51,0,0,0,.46-.51V24.17a.52.52,0,0,0-.52-.52h-7.89a.52.52,0,0,0-.52.53c0,.86,0,1.59,0,1.76s.05,1.25.05,1.37v0c0,.5-.93,1-1.72,1-.59,0-1-.21-1-.79,0-.12.1-1.45.15-2,.14-1,.14-5.2.14-5.83V10a20.51,20.51,0,0,0-.17-3.26.5.5,0,0,1,.76-.51l1.86,1.23a1.52,1.52,0,0,0,.86.25h7.46a.52.52,0,0,0,.52-.52V4.36a35.7,35.7,0,0,0-.19-3.78.52.52,0,0,1,.52-.58c3.59.06,4,.72,4,1.08,0,.71-.93,1.07-1.5,1.23a.53.53,0,0,0-.36.49V7.21a.51.51,0,0,0,.51.52h8.35a.52.52,0,0,0,.41-.21c.31-.43,1-1.25,1.23-1.25.49,0,2.89,1.63,2.89,2.46,0,.5-.6.89-1.11,1.07a.52.52,0,0,0-.36.49V21c0,.79,0,2.33.05,3.49a13.58,13.58,0,0,0,.1,1.38Zm-15-16.63h-7.85a.51.51,0,0,0-.51.51V21c0,.13,0,.63,0,1h8.41a.51.51,0,0,0,.52-.51V9.74A.51.51,0,0,0,151.74,9.23Zm11.88,0h-8.4a.51.51,0,0,0-.51.51V21.56a.51.51,0,0,0,.51.51h8.4a.51.51,0,0,0,.51-.51V9.74A.51.51,0,0,0,163.62,9.23Z" />
          <path d="M264.12,28.22c-2.23,3.29-4.4,4.57-7.06,4.57-3.26,0-6.72-3.56-6.72-9.92A16.14,16.14,0,0,1,256.12,11a21.88,21.88,0,0,1,14.31-4.8c10.86,0,17.28,5.8,17.28,14.35,0,7.09-4.59,13.26-15.55,15.68a.8.8,0,0,1-1-.45,4,4,0,0,0-1.33-1.24c10.22-2,15.16-7.13,15.16-14.44s-6.08-12-13.28-12h-1.14C269.69,15.74,267.18,23.65,264.12,28.22ZM257.8,12.45a14.32,14.32,0,0,0-5,10.47c0,5.3,2.57,7.45,4.44,7.45,1.58,0,3.36-1.28,4.84-3.61,2.48-4,4.84-10.69,5.71-17.1a1.1,1.1,0,0,0-1.29-1.22A18.06,18.06,0,0,0,257.8,12.45Z" />
          <path d="M379.07,38.83A1.26,1.26,0,0,1,377.75,40a4.43,4.43,0,0,1-1-.08.91.91,0,0,1-.54-.91v-.13c.19-1.08.49-9.06.54-10.31.14-4.24.39-8.11.44-10.81a37.76,37.76,0,0,1-2.21,6c-1.08,2-5.25,8.69-6.13,8.69a.69.69,0,0,1-.69-.63.62.62,0,0,1,.15-.33,49.45,49.45,0,0,0,8.05-17.34.55.55,0,0,0-.55-.66h-1.12c-1.19,0-3.56.16-4.61.29a.54.54,0,0,1-.52-.25,4,4,0,0,1-.56-1.83v-.13c1.12.21,5.69.5,6.86.5h.94V6.3a.56.56,0,0,0-.71-.53,46.91,46.91,0,0,1-6.31,1.42c-.29,0-.34-.46-.34-.83,0-.21,0-.38,0-.38,1.41-.28,10.44-2.62,13-5.49a.54.54,0,0,1,.73,0c.74.58,2.12,1.76,2.12,2.47a.5.5,0,0,1-.24.41,1.21,1.21,0,0,1-.45.08,3.13,3.13,0,0,1-1.06-.23.54.54,0,0,0-.43,0c-1.27.57-2.55,1.08-3.79,1.52a.54.54,0,0,0-.36.51l0,6.3a.54.54,0,0,0,.55.55h1.18a.54.54,0,0,0,.44-.22,19.48,19.48,0,0,1,1.6-2,.66.66,0,0,1,.34-.09c.54,0,3.24,2.25,3.24,3.12,0,.29-.24.59-.83.59l-6,0A.56.56,0,0,0,379,14V16.1a.55.55,0,0,0,.23.44c3.08,2.21,5.37,4.75,5.37,6.57s-.69,2.08-1.13,2.08-.79-.29-1-1a15.28,15.28,0,0,0-2.49-5,.55.55,0,0,0-1,.31l-.05,9.09c0,3.49.1,5.49.1,7.11v1c0,1.29.05,2.12.05,2.12Zm11.68-.46c-1.58,0-5.42.08-7.17.26a.54.54,0,0,1-.52-.24,4.32,4.32,0,0,1-.46-1.07.56.56,0,0,1,.6-.7c2.27.28,6.69.38,8.82.38h5.78a.55.55,0,0,0,.55-.55V32.94a.55.55,0,0,0-.55-.55H394a59.55,59.55,0,0,0-6.82.3.53.53,0,0,1-.48-.18,2.92,2.92,0,0,1-.55-1.15.54.54,0,0,1,.58-.66c2,.17,4.43.27,8.6.27h2.44a.55.55,0,0,0,.55-.55V27.16a.55.55,0,0,0-.55-.55h-7.69a2.79,2.79,0,0,1,.05.58c0,1.45-1.47,1.5-1.77,1.5-.68,0-.88-.34-.88-.75,0-.13.05-.25.05-.42a22,22,0,0,0,.15-2.29c0-1.2.14-2.24.14-3.49l0-6a22.29,22.29,0,0,0-.44-4.28,13.57,13.57,0,0,1,1.67.75l1.35.72a.48.48,0,0,0,.26.07h7.06a.56.56,0,0,0,.55-.56V9.82a.55.55,0,0,0-.55-.55h-3.37c-2.37,0-5.53.08-8.13.31a.54.54,0,0,1-.45-.18,2.69,2.69,0,0,1-.56-1.12.54.54,0,0,1,.58-.66c2.19.18,5.63.32,9.83.32h2.1a.56.56,0,0,0,.55-.56V5.14a.55.55,0,0,0-.61-.55c-4.38.42-8.49.69-11.16.73a.48.48,0,0,1-.49-.54.94.94,0,0,1,.24-.67c6.23-.28,19.56-1.89,22.78-3.85a.58.58,0,0,1,.57,0c1.15.66,2.8,2.13,2.8,2.55s-1.08.5-1.18.5A5.32,5.32,0,0,1,409.62,3a.58.58,0,0,0-.26,0c-2.57.5-5.38.93-8.21,1.25a.55.55,0,0,0-.49.55V7.38a.55.55,0,0,0,.55.56H409a.54.54,0,0,0,.44-.22c.45-.6,1.73-2.24,2.1-2.24a.4.4,0,0,1,.24.09c.84.33,3.53,2.33,3.53,3,0,.33-.19.67-.83.67H401.21a.55.55,0,0,0-.55.55v2.59a.55.55,0,0,0,.55.56h7.27a.55.55,0,0,0,.43-.21A8.13,8.13,0,0,1,410,11.64a.32.32,0,0,1,.24-.09c.25,0,2.75,1.63,2.75,2.42,0,.29-.26.64-1.12.87a.54.54,0,0,0-.4.53v5.79c0,.58.1,2.79.1,3.82,0,.5.14,1.88.14,2,0,.88-.54,1.08-1.22,1.21a1.68,1.68,0,0,1-.44,0c-.59,0-.89-.29-.89-.92v-.74h-7.93a.54.54,0,0,0-.55.55v3.26a.55.55,0,0,0,.55.55h6.54a.55.55,0,0,0,.43-.2c.43-.53,1.59-1.92,1.94-1.92a.44.44,0,0,1,.25.08c.69.3,3.53,2,3.53,2.83,0,.33-.19.63-.83.63H401.21a.54.54,0,0,0-.55.55v3.51a.55.55,0,0,0,.55.55h8.48a.58.58,0,0,0,.46-.25c1.27-1.84,2-2.41,2.18-2.41a.46.46,0,0,1,.2,0c.54.25,3.73,2.54,3.73,3.33,0,.37-.45.66-1,.66Zm7.05-24.11h-7.14a.56.56,0,0,0-.56.54l0,3.55a.54.54,0,0,0,.55.56h7.18a.55.55,0,0,0,.55-.55V14.81A.55.55,0,0,0,397.8,14.26Zm0,5.94h-7.19a.56.56,0,0,0-.55.56v4a.56.56,0,0,0,.55.56h7.19a.56.56,0,0,0,.55-.56v-4A.56.56,0,0,0,397.8,20.2Zm10.94-5.94h-7.53a.54.54,0,0,0-.55.55v3.55a.54.54,0,0,0,.55.55h7.53a.55.55,0,0,0,.55-.55V14.81A.55.55,0,0,0,408.74,14.26Zm0,5.94h-7.53a.55.55,0,0,0-.55.56v4a.55.55,0,0,0,.55.56h8c0-.05.05-.13.05-.17,0-.33.05-2.62.05-3.33v-1A.56.56,0,0,0,408.74,20.2Z" />
          <path d="M8.38,64.35a.73.73,0,0,1,.27.57.74.74,0,0,1-.74.74,1,1,0,0,1-.54-.2,4.67,4.67,0,0,0-2.63-.7c-2.1,0-2.88,1-2.88,2.13S2.58,68.58,5,69c3.18.6,4.53,1.52,4.53,3.63s-1.72,3.76-4.64,3.76A7.23,7.23,0,0,1,.46,75.08a.8.8,0,0,1-.38-.66.74.74,0,0,1,.74-.74.87.87,0,0,1,.56.22A5.42,5.42,0,0,0,4.9,75C6.84,75,8,74.1,8,72.67c0-1.18-.9-1.71-3.4-2.17C1.64,70,.36,68.92.36,66.9c0-2.21,1.68-3.61,4.38-3.61A5.93,5.93,0,0,1,8.38,64.35Z" />
          <path d="M35.09,64.17a.72.72,0,0,1-.74.72H28.27v4.23h5.85a.7.7,0,1,1,0,1.4H28.27v4.3h6.11a.72.72,0,1,1,0,1.44H28A1.18,1.18,0,0,1,26.77,75V64.7A1.19,1.19,0,0,1,28,63.45h6.32A.72.72,0,0,1,35.09,64.17Z" />
          <path d="M60.74,64.17a.72.72,0,0,1-.74.72H53.92v4.23h5.85a.7.7,0,1,1,0,1.4H53.92v4.3H60a.72.72,0,1,1,0,1.44H53.69A1.18,1.18,0,0,1,52.42,75V64.7a1.19,1.19,0,0,1,1.27-1.25H60A.72.72,0,0,1,60.74,64.17Z" />
          <path d="M88.1,68.39a20.61,20.61,0,0,1,0,2.94,5.24,5.24,0,0,1-5.42,4.93H79.34A1.17,1.17,0,0,1,78.08,75V64.69a1.17,1.17,0,0,1,1.26-1.24h3.29A5.29,5.29,0,0,1,88.1,68.39Zm-8.52-3.46v9.85h3a3.74,3.74,0,0,0,4-3.59,15.52,15.52,0,0,0,0-2.64,3.76,3.76,0,0,0-4-3.62Z" />
          <path d="M113.12,64.35a.73.73,0,0,1,.27.57.74.74,0,0,1-.74.74,1,1,0,0,1-.54-.2,4.64,4.64,0,0,0-2.63-.7c-2.1,0-2.88,1-2.88,2.13s.72,1.69,3.13,2.15c3.17.6,4.52,1.52,4.52,3.63s-1.72,3.76-4.64,3.76a7.25,7.25,0,0,1-4.41-1.35.83.83,0,0,1-.38-.66.74.74,0,0,1,.74-.74.88.88,0,0,1,.57.22A5.42,5.42,0,0,0,109.65,75c1.93,0,3.1-.86,3.1-2.29,0-1.18-.89-1.71-3.4-2.17-3-.55-4.25-1.58-4.25-3.6,0-2.21,1.69-3.61,4.38-3.61A5.91,5.91,0,0,1,113.12,64.35Z" />
          <path d="M150.74,71.32a20.33,20.33,0,0,1,0-2.92,5.36,5.36,0,0,1,5.36-5.11,5.41,5.41,0,0,1,5.42,5.11,20.33,20.33,0,0,1,0,2.92,5.4,5.4,0,0,1-10.78,0Zm9.26-.07a16.13,16.13,0,0,0,0-2.78,3.89,3.89,0,0,0-3.9-3.71,3.85,3.85,0,0,0-3.84,3.71,14.35,14.35,0,0,0,0,2.78,3.87,3.87,0,0,0,7.74,0Z" />
          <path d="M187.48,64.17a.73.73,0,0,1-.75.72h-6v4.46h5.69a.72.72,0,0,1,.74.73.73.73,0,0,1-.74.72h-5.69v4.78a.75.75,0,0,1-.75.77.76.76,0,0,1-.74-.77V64.69a1.17,1.17,0,0,1,1.26-1.24h6.27A.71.71,0,0,1,187.48,64.17Z" />
          <path d="M231.77,64.35a.73.73,0,0,1,.27.57.74.74,0,0,1-.74.74,1,1,0,0,1-.54-.2,4.64,4.64,0,0,0-2.63-.7c-2.1,0-2.88,1-2.88,2.13s.72,1.69,3.13,2.15c3.17.6,4.52,1.52,4.52,3.63s-1.72,3.76-4.64,3.76a7.23,7.23,0,0,1-4.41-1.35.83.83,0,0,1-.38-.66.74.74,0,0,1,.74-.74.86.86,0,0,1,.56.22A5.44,5.44,0,0,0,228.29,75c1.94,0,3.11-.86,3.11-2.29,0-1.18-.89-1.71-3.4-2.17-3-.55-4.25-1.58-4.25-3.6,0-2.21,1.68-3.61,4.38-3.61A5.91,5.91,0,0,1,231.77,64.35Z" />
          <path d="M249.76,71.32a17.79,17.79,0,0,1,0-2.92,5.39,5.39,0,0,1,10.77,0,17.79,17.79,0,0,1,0,2.92,5.39,5.39,0,0,1-10.77,0Zm9.26-.07a16.13,16.13,0,0,0,0-2.78,3.88,3.88,0,0,0-7.75,0,16.13,16.13,0,0,0,0,2.78,3.88,3.88,0,0,0,7.75,0Z" />
          <path d="M279.71,64.14V74.77h6a.79.79,0,0,1,.77.75.75.75,0,0,1-.77.74H279.4a1.12,1.12,0,0,1-1.19-1.18V64.14a.75.75,0,1,1,1.5,0Z" />
          <path d="M304.72,64.14V75.57a.75.75,0,1,1-1.5,0V64.14a.75.75,0,1,1,1.5,0Z" />
          <path d="M331.87,64.19a.77.77,0,0,1-.77.75h-3.61V75.58a.74.74,0,0,1-.74.77.76.76,0,0,1-.76-.77V64.94h-3.64a.76.76,0,0,1-.77-.75.75.75,0,0,1,.77-.74h8.75A.75.75,0,0,1,331.87,64.19Z" />
          <path d="M359,64.14v6.93a5.17,5.17,0,1,1-10.34,0V64.14a.76.76,0,0,1,.74-.77.74.74,0,0,1,.75.77v6.91a3.68,3.68,0,1,0,7.35,0V64.14a.76.76,0,0,1,.75-.77A.74.74,0,0,1,359,64.14Z" />
          <path d="M387.11,68.39a20.61,20.61,0,0,1,0,2.94,5.24,5.24,0,0,1-5.42,4.93h-3.34A1.17,1.17,0,0,1,377.09,75V64.69a1.17,1.17,0,0,1,1.26-1.24h3.29A5.29,5.29,0,0,1,387.11,68.39Zm-8.52-3.46v9.85h3a3.74,3.74,0,0,0,4-3.59,15.52,15.52,0,0,0,0-2.64,3.76,3.76,0,0,0-4-3.62Z" />
          <path d="M413.1,64.17a.72.72,0,0,1-.74.72h-6.08v4.23h5.85a.7.7,0,1,1,0,1.4h-5.85v4.3h6.12a.72.72,0,1,1,0,1.44H406A1.18,1.18,0,0,1,404.78,75V64.7A1.19,1.19,0,0,1,406,63.45h6.32A.72.72,0,0,1,413.1,64.17Z" />
        </g>
      </g>
    </svg>
  );
};

export default Introduction_1;
