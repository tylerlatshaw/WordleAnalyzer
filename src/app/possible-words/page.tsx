import { DataTable } from "@/components/possible-words/word-table";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Possible Words",
};

export default async function Page() {

    return <>
        <div className="h-full mx-4 md:mx-0">
            <div className="main-content container w-full mx-auto flex justify-center flex-wrap mx-auto pt-28 md:pt-36 pb-16 md:pb-24">

                <h1 className="w-full pb-8 text-3xl text-black md:text-4xl font-bold text-center">Possible Words</h1>

                <div className="w-full sm:w-2/3 md:w-2/5 lg:1/4 mx-8">
                    <p className="w-full mx-auto text-center">Below is a list of all possible Wordle words and their relative scores. The higher the score is, the more likely the word is to appear.</p>
                </div>

                <div className="flex flex-row items-center justify-center w-full my-8">

                    <div className="px-6 w-full overflow-x-auto">

                        <DataTable />

                    </div>

                </div>

            </div>
        </div>
    </>;
}