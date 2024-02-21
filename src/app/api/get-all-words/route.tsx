// import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DB_LETTERS;

// const notion = new Client({ auth: notionSecret });

type Row = {
  Score: number,
  Position: number,
  Letter: string
}

export async function GET() {

  if (!notionSecret || !notionDatabaseId) throw new Error("Missing Notion Authentication");

  // const query = await notion.databases.query({
  //   database_id: notionDatabaseId,
  //   page_size: 2
  // });

  // @ts-ignore
  const data = query.results.map((row) => row.properties);

  // const structuredData: Row[] = data.map((row) => ({
  //   Score: row.Score.number,
  //   Position: row.Position.number,
  //   Letter: row.Letter.title[0].plain_text
  // }));

  return NextResponse.json(data);

}