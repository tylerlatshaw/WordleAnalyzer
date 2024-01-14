"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { splitWord } from "./../utilities/word-processing";

import type { classColorState, inputState, letterResponseType } from "@/lib/type-library";

export default function FormHandler() {
    const [word, setWord] = useState("");
    const [inputState, setInputState] = useState<inputState>("input");
    const [letterResponse, setLetterResponse] = useState<letterResponseType[]>([]);
    const [backgroundClass, setBackgroundClass] = useState<classColorState[]>(["bg-none", "bg-none", "bg-none", "bg-none", "bg-none"]);

    function handleInputSubmit() {
        if (word.length === 5) {
            setLetterResponse(splitWord(word));
            setInputState("button");
        }
    }

    function handleButtonClick(index: number) {
        const tempArray: letterResponseType[] = letterResponse;

        if (letterResponse[index].response === "unset") {
            tempArray[index].response = "incorrect";
            setLetterResponse(tempArray);

            const items = backgroundClass.slice();
            items[index] = "bg-w-gray";
            setBackgroundClass(items);
        } else if (letterResponse[index].response === "incorrect") {
            tempArray[index].response = "misplaced";
            setLetterResponse(tempArray);

            const items = backgroundClass.slice();
            items[index] = "bg-w-yellow";
            setBackgroundClass(items);
        } else if (letterResponse[index].response === "misplaced") {
            tempArray[index].response = "correct";
            setLetterResponse(tempArray);

            const items = backgroundClass.slice();
            items[index] = "bg-w-green";
            setBackgroundClass(items);
        } else {
            tempArray[index].response = "incorrect";
            setLetterResponse(tempArray);

            const items = backgroundClass.slice();
            items[index] = "bg-w-gray";
            setBackgroundClass(items);
        }
    }

    function handleButtonSubmit() {
        if (!letterResponse.some(letter => letter.response === "unset")) {
            setInputState("readOnly");
        }
    }

    if (inputState === "input") {
        return <div className="flex flex-row">
            <OtpInput
                value={word}
                onChange={setWord}
                numInputs={5}
                renderInput={(props) => <input {...props} />}
                containerStyle={"text-5xl"}
                inputStyle={"w-12 h-16 m-2 border-2 border-gray-400 rounded-sm uppercase"}
            />
            <Button className="w-12 h-16 m-2 rounded-full bg-green-500 hover:bg-green-700 text-white" onClick={() => { handleInputSubmit(); }}>
                <CheckIcon />
            </Button>
        </div>;
    } else if (inputState === "button") {
        return <div className="flex flex-row items-center">
            {
                letterResponse.map((value) => (
                    <div key={value.index} className="w-12 h-16 m-2 border-2 border-gray-400 rounded-sm uppercase text-black text-5xl">
                        <button className={"w-full h-full m-0 p-0 uppercase " + backgroundClass[value.index]} value={value.index} onClick={() => { handleButtonClick(value.index); }}>
                            {value.letter}
                        </button>
                    </div>
                ))
            }
            <Button className="w-12 h-16 m-2 rounded-full bg-green-500 hover:bg-green-700 text-white" onClick={() => { handleButtonSubmit(); }}>
                <CheckIcon />
            </Button>
        </div>;
    } else {
        return <div className="flex flex-row items-center">
            {
                letterResponse.map((value) => (
                    <div key={value.index} className="w-12 h-16 m-2 border-2 border-gray-400 rounded-sm uppercase text-black text-5xl">
                        <div className={"w-full h-full m-0 p-0 flex items-center justify-center uppercase " + backgroundClass[value.index]}>
                            {value.letter}
                        </div>
                    </div>
                ))
            }
            <div className="w-12 h-16 mx-4 my-2"></div>
        </div>;
    }
}