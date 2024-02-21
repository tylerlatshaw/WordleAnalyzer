// import axios from "axios";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Wordle Word Analyzer",
};

const fetchFromNotion = async () => {
    // const {data} = await axios.get("/api/get-all-words");

    // return JSON.parse(data);
};

export default async function Page() {

    const data = await fetchFromNotion();

    return <>
        <div className="h-full mx-4 md:mx-0">
            <div className="main-content container w-full mx-auto flex flex-wrap mx-auto pt-28 md:pt-36 pb-16 md:pb-24">

                <h1 className="w-full pb-8 text-3xl text-black md:text-4xl font-bold text-center">Word List</h1>

                <div className="flex flex-row items-center justify-center w-full my-8">
                    {
                        // data
                    }
                </div>

            </div>
        </div>
    </>;
}