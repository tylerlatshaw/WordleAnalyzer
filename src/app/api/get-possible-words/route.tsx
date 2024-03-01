import { NextResponse } from "next/server";
import { getPossibleWords } from "@/utilities/notion-client";
import { PossibleWordResponseType, PossibleWordResultType } from "@/app/lib/notion-type-library";

export async function GET() {
    var start_cursor;
    var has_more = true;
    const sanitizedResults: PossibleWordResultType[] = [];

    do {
        const response = await getPossibleWords(start_cursor!) as unknown as PossibleWordResponseType;
        sanitizedResults.push(...response.results);

        response.has_more ? start_cursor = response.next_cursor : has_more = false;
    } while (has_more);

    return NextResponse.json(sanitizedResults);
}