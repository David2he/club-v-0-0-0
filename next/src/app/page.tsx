"use client";

import { Toast } from "lodge-lib/components/Blocks/Toast/Toast";
import "lodge-lib/theme/rules.scss";
import "./reset.scss";

export default function Home() {
    return (
        <main>
            <Toast typeLog={"error"} message={"ceci est un test"} />
        </main>
    );
}
