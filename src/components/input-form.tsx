"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

type inputState = "input" | "button" | "readOnly";
type submitState = "ineligible" | "eligible" | "submitted";
type letterResponseState = "unset" | "correct" | "incorrect" | "misplaced";
type classColorState = "bg-none" | "bg-w-green" | "bg-w-yellow" | "bg-w-gray";

type letterResponseType = {
    index: number,
    letter: string,
    response: letterResponseState | null,
    classColor: classColorState
}

export default function InputForm() {
    const [word, setWord] = useState("");
    const [inputState, setInputState] = useState<inputState>("input");
    const [submitState, setSubmitState] = useState<submitState>("ineligible");
    const [letterResponse, setLetterResponse] = useState<letterResponseType[]>([]);

    if (inputState === "input" && submitState === "ineligible" && word.length === 5) {
        setSubmitState("eligible");
    }

    function getInputField() {
        if (inputState === "input") {
            let buttonDisabled;

            if(submitState === "ineligible") {
                buttonDisabled = true;
            } else {
                buttonDisabled = false;
            }
            
            return <>
                <OtpInput
                    value={word}
                    onChange={setWord}
                    numInputs={5}
                    renderInput={(props) => <input {...props} />}
                    containerStyle={"text-5xl"}
                    inputStyle={"w-12 h-16 m-2 border-2 border-gray-400 rounded-sm uppercase"}
                />
                <Button disabled={buttonDisabled} className="m-2 rounded-full bg-violet-400 hover:bg-violet-600 text-white" onClick={() => { handleInputSubmit(); }}>
                    <CheckIcon />
                </Button>
            </>;
        } else if (inputState === "button") {
            return <>
                {
                    letterResponse.map((value) => (
                        <div key={value.index} className="w-12 h-16 m-2 border-2 border-gray-400 rounded-sm uppercase text-black text-5xl">
                            <button className={"w-full h-full m-0 p-0 uppercase " + letterResponse[value.index].classColor} value={value.index} onClick={() => { handleInputButtonClick(value.index); }}>
                                {value.letter}
                            </button>
                        </div>
                    ))
                }
            </>;
        } else {

        }
    };

    function getSubmitButton() {
        if (submitState === "ineligible") {
            return <>
                <Button disabled className="m-2 rounded-full bg-gray-300 text-gray-500">
                    <CloseIcon />
                </Button>
            </>;
        } else if (submitState === "eligible") {
            return <>
                <Button className="m-2 rounded-full bg-violet-400 hover:bg-violet-600 text-white" onClick={() => { handleInputSubmit(); }}>
                    <CheckIcon />
                </Button>
            </>;
        } else {
            return <>
                <Button disabled className="m-2 rounded-full bg-white">
                </Button>
            </>;
        }
    };

    function handleInputSubmit() {
        const array = word.split("");
        array.map((value, index) => {
            setLetterResponse(prevState => [...prevState, {
                index: index,
                letter: value,
                response: "unset",
                classColor: "bg-none"
            }]);
        });

        setInputState("button");
    }

    function handleInputButtonClick(index: number) {

        const tempArray: letterResponseType[] = letterResponse;

        if (letterResponse[index].response === "unset") {
            tempArray[index].response = "incorrect";
            tempArray[index].classColor = "bg-w-gray";
            setLetterResponse(tempArray);
        } else if (letterResponse[index].response === "incorrect") {
            tempArray[index].response = "misplaced";
            tempArray[index].classColor = "bg-w-yellow";
            setLetterResponse(tempArray);
        } else if (letterResponse[index].response === "misplaced") {
            tempArray[index].response = "correct";
            tempArray[index].classColor = "bg-w-green";
            setLetterResponse(tempArray);
        } else {
            tempArray[index].response = "incorrect";
            tempArray[index].classColor = "bg-w-gray";
            setLetterResponse(tempArray);
        }
    }

    return (
        <>
            <div className="flex flex-row">
                {
                    getInputField()
                }
            </div>
        </>
    );
}