import { NextResponse } from "next/server";
import { getLetterRankings } from "@/utilities/notion-client";
import { PastWordResponseType, PastWordResultType } from "@/app/lib/notion-type-library";

export async function GET() {
    var start_cursor;
    var has_more = true;
    const sanitizedResults: PastWordResultType[] = [];

    do {
        const response = await getLetterRankings(start_cursor!) as unknown as PastWordResponseType;
        sanitizedResults.push(...response.results);

        response.has_more ? start_cursor = response.next_cursor : has_more = false;
    } while (has_more);

    return NextResponse.json(sanitizedResults);
}