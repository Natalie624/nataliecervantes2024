"use client";
import { motion } from "framer-motion";

export default function EmojiIntro() {
   

    return (
        <>
            {" "}Hi I&apos;m Natalie!
                <motion.video
                    src="/natalie-emoji.webm"
                    autoPlay
                    muted
                    playsInline
                    width={32}
                    height={32}
                    className="inline-block mx-2 rounded-full"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    />
        </>
    );
}