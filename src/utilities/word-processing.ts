"use client";

import { letterResponseType } from "./../lib/type-library";

export function splitWord(word: string) {
    const letterResponse: letterResponseType[] = [];
    let array = word.split("");
    array!.map((value, index) => {
        letterResponse.push(
            {
                index: index,
                letter: value,
                response: "unset"
            }
        );
    });

    return letterResponse;
}