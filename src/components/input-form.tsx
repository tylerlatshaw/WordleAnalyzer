"use client";

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

type inputState = "input" | "button" | "readOnly";
type submitState = "ineligible" | "eligible" | "submitted";

export default function InputForm() {
    const [inputState, setInputState] = useState<inputState>("input");
    const [submitState, setSubmitState] = useState<submitState>("ineligible");
    const [word, setWord] = useState("");

    if (inputState === "input" && submitState === "ineligible" && word.length === 5) {
        setSubmitState("eligible");
    }

    const inputField = () => {
        if (inputState === "input") {
            return <>
                <OtpInput
                    value={word}
                    onChange={setWord}
                    numInputs={5}
                    renderInput={(props) => <input {...props} />}
                    containerStyle={"text-5xl"}
                    inputStyle={"w-[64px] m-2 border-2 border-gray-400 rounded-sm uppercase"}
                />
            </>;
        } else if (inputState === "button") {
            const array = word.split(",");
            return <>
                {
                    array.map((letter) => {
                        <Button className="">
                            {letter}
                        </Button>;
                    })
                }
            </>;
        } else {
            const array = word.split(",");
            return <>
                {
                    array.map((letter) => {
                        <Button className="">
                            {letter}
                        </Button>;
                    })
                }
            </>;
        }
    };

    const submitButton = () => {

        if (submitState === "ineligible") {
            return <>
                <Button disabled className="m-2 rounded-full bg-gray-300 text-gray-500">
                    <CloseIcon />
                </Button>
            </>;
        } else if (submitState === "eligible") {
            return <>
                <Button className="m-2 rounded-full bg-violet-400 hover:bg-violet-600 text-white" onClick={() => { setSubmitState("submitted"); setInputState("button"); }}>
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

    return (
        <>
            <div className="flex flex-row">
                {
                    inputField()
                }

                {
                    submitButton()
                }
            </div>
        </>
    );
}