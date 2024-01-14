import { Client } from "@notionhq/client";
import { NotionWordList } from "./notion-interfaces";

export const getAllWords = async (): Promise<NotionWordList[]> => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: process.env.NOTION_DB_WORDS!,
        page_size: 10,
        sorts: [
            {
                property: "Word",
                direction: "ascending",
            },
        ],
    });

    const words = response.results as unknown as NotionWordList[];

    return words;
};