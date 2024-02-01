"use client";

import { Toast } from "lodge-lib/components/Blocks/Toast/Toast";
import "lodge-lib/theme/rules.scss";
import "./reset.scss";
import { BlockText } from "lodge-lib/components/Elements/BlockText/BlockText";
import { ButtonSubmit } from "lodge-lib/components/Elements/Button/ButtonSubmit";

export default function Home() {
    return (
        <main>
            <Toast typeLog={"error"} message={"ceci est un test"} />
            <BlockText
                title={"test"}
                text={"Lorem Ipsum em dolores"}
                closable={false}
                expandable={true}
            ></BlockText>
            <ButtonSubmit text={"submit"} />
        </main>
    );
}
