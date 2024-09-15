import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import Papa from "papaparse";
import { WordType } from "@/app/lib/type-library";

export async function GET() {
    try {
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: process.env.AWS_DIRECTORY! + "wordle_possible_words.csv",
        });

        const { Bucket, Key } = (command as any).input;
        const url = `https://${Bucket}.s3.amazonaws.com/${Key}`;

        const dataset: WordType[] = [];

        await fetch(url)
            .then(response => response.text())
            .then(responseText => {
                var data = Papa.parse(responseText, {
                    header: true
                });
                dataset.push(data.data as unknown as WordType);
            });

        return NextResponse.json(dataset[0]);
    } catch (error) {
        console.error("Error fetching data from S3: ", error);
        return new NextResponse("Error fetching data from S3");
    }
}