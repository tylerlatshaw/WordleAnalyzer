"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import type { inputState, letterResponseType } from "@/lib/type-library";

export default function FormHandler() {
    const [word, setWord] = useState("");
    const [inputState, setInputState] = useState<inputState>("input");
    const [submitState, setSubmitState] = useState(false);
    const [letterResponse, setLetterResponse] = useState<letterResponseType[]>([]);

    function handleInputSubmit() {
        let array;
        try {
            array = word.split("");
        } finally {
            array!.map((value, index) => {
                setLetterResponse(prevState => [...prevState, {
                    index: index,
                    letter: value,
                    response: "unset",
                    classColor: "bg-none"
                }]);
            });
        }
        console.log(letterResponse);

        setSubmitState(true);
        setInputState("button");
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
            <Button disabled={submitState} className="m-2 rounded-full bg-violet-400 hover:bg-violet-600 text-white" onClick={() => { handleInputSubmit(); }}>
                <CheckIcon />
            </Button>
        </div>;
    }
}