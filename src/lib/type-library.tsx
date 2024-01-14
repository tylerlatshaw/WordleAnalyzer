import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type FooterSocialType = {
    display: string,
    link: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export type inputState = "input" | "button" | "readOnly";
export type submitState = "ineligible" | "eligible" | "submitted";
export type letterResponseState = "unset" | "correct" | "incorrect" | "misplaced";
export type classColorState = "bg-none" | "bg-w-green" | "bg-w-yellow" | "bg-w-gray";

export type letterResponseType = {
    index: number,
    letter: string,
    response: letterResponseState | null
}