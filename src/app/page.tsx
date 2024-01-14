"use client";

import { Metadata } from "next";
import { useState } from "react";
import FormHandler from "./../components/form-handler";
import MessageCenter from "./../components/message-center";
import EmptyInput from "@/components/empty-input";
import { gameState } from "@/lib/type-library";

export const metadata: Metadata = {
  title: "Wordle Word Analyzer",
};

export default function Page() {
  const [message, setMessage] = useState("Please enter a word");
  const [wordCount, setWordCount] = useState(1);
  const [gameState, setGameState] = useState<gameState>("playing");

  return <>
    <div className="h-full mx-4 md:mx-0">
      <div className="main-content container w-full mx-auto flex flex-wrap mx-auto pt-28 md:pt-36 pb-16 md:pb-24">

        <h1 className="w-full pb-8 text-3xl text-black md:text-4xl font-bold text-center">Wordle Word Analyzer</h1>

        <div className="flex flex-row items-center justify-center w-full my-8">
          <div className="flex flex-col items-center justify-center">
            <MessageCenter message={message} setMessage={setMessage} />
            <FormHandler messageState={{ message, setMessage }} wordCountState={{ wordCount, setWordCount }} gamePlayState={{ gameState, setGameState }} />
            {
              wordCount >= 2 ?
                <FormHandler messageState={{ message, setMessage }} wordCountState={{ wordCount, setWordCount }} gamePlayState={{ gameState, setGameState }} /> :
                <EmptyInput />
            }
            {
              wordCount >= 3 ?
                <FormHandler messageState={{ message, setMessage }} wordCountState={{ wordCount, setWordCount }} gamePlayState={{ gameState, setGameState }} /> :
                <EmptyInput />
            }
            {
              wordCount >= 4 ?
                <FormHandler messageState={{ message, setMessage }} wordCountState={{ wordCount, setWordCount }} gamePlayState={{ gameState, setGameState }} /> :
                <EmptyInput />
            }
            {
              wordCount >= 5 ?
                <FormHandler messageState={{ message, setMessage }} wordCountState={{ wordCount, setWordCount }} gamePlayState={{ gameState, setGameState }} /> :
                <EmptyInput />
            }
            {
              wordCount >= 6 ?
                <FormHandler messageState={{ message, setMessage }} wordCountState={{ wordCount, setWordCount }} gamePlayState={{ gameState, setGameState }} /> :
                <EmptyInput />
            }
          </div>
        </div>

      </div>
    </div>
  </>;
}