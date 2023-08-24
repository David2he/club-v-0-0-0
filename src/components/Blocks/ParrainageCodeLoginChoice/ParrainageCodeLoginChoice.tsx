import React, { useEffect, useRef } from "react";
import style from "./ParrainageCodeLoginChoice.module.scss";
import { Browser } from "@capacitor/browser";
import { ParrainageCodeForm } from "../../Elements/ParrainageCodeForm/ParrainageCodeForm";

export const ParrainageCodeLoginChoice = () => {
  

  return (
    <div className={style.codeLoginChoiceContainer}>
      <div className={style.orChoiceContainer}>
        <span></span>
        <p>OU</p>
        <span></span>
      </div>
      <p>Code de parrainage</p>
      <div>
        <ParrainageCodeForm goToUrl="register" loginType="register"/>
      </div>
    </div>
  );
};
