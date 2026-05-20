
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar2() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/girgit.png" width="180" height="180" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    )
}
