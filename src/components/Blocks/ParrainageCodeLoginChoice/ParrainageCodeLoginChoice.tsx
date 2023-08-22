import React, { useEffect, useRef } from "react";
import style from "./ParrainageCodeLoginChoice.module.scss";
import { Browser } from "@capacitor/browser";
import { ParraingageCodeForm } from "../../Elements/ParraingageCodeForm/ParraingageCodeForm";

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
        <ParraingageCodeForm goToUrl="register" />
      </div>
    </div>
  );
};
