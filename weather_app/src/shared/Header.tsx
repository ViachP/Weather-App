import React from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../assets/icons/global/GlobalSvgSelector";

interface Props {}

export const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Weather App</div>
      </div>
      <div className={s.wrapper}></div>
    </header>
  );
};
