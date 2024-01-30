"use client";
import { Toast } from "../../../lib/components/Blocks/Toast/Toast";
import { InputProps } from "../../../lib/types/Types";
import { useState } from "react";

export default function Home() {
    return (
        <main>
            <div>
                <p>Get started by editing;</p>
                <Toast typeLog={"error"} message={"test"} key={0} />
            </div>
        </main>
    );
}
