import { NextResponse } from "next/server";

export async function GET() {
  const { Client } = require("@notionhq/client");

  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DB_WORDS;

  return NextResponse.json(notion.databases.query({
    database_id: databaseId,
    page_size: 10,
    sorts: [
      {
        property: "Word",
        direction: "ascending",
      },
    ],
  }));
}