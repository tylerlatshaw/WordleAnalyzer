import "server-only";

import { Client } from "@notionhq/client";

export const notionClient = new Client({
    auth: process.env.NOTION_SECRET
});

export const getLetterRankings = async (start_cursor: string | undefined) => {

    const response = notionClient.databases.query({
        database_id: process.env.NOTION_DB_LETTER_RANKING!,
        sorts: [
            {
                property: "Name",
                direction: "ascending"
            }
        ],
        start_cursor: start_cursor!
    });

    return response;
};

export const getPastWords = async (start_cursor: string | undefined) => {

    const response = notionClient.databases.query({
        database_id: process.env.NOTION_DB_PAST_WORDS!,
        sorts: [
            {
                property: "PuzzleNumber",
                direction: "ascending"
            }
        ],
        start_cursor: start_cursor!
    });

    return response;
};

export const getPossibleWords = async (start_cursor: string | undefined) => {

    const response = notionClient.databases.query({
        database_id: process.env.NOTION_DB_POSSIBLE_WORDS!,
        sorts: [
            {
                property: "Score",
                direction: "descending"
            }
        ],
        start_cursor: start_cursor!
    });

    return response;
};