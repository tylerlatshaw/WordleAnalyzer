import { Metadata } from "next/types";
import RankingTable from "./../../components/letter-ranking/ranking-table";

export const metadata: Metadata = {
    title: "Letter Ranking",
};

export default async function Page() {

    return <>
        <div className="h-full mx-4 md:mx-0">
            <div className="main-content container w-full mx-auto flex flex-wrap mx-auto pt-28 md:pt-36 pb-16 md:pb-24">

                <h1 className="w-full pb-8 text-3xl text-black md:text-4xl font-bold text-center">Letter Ranking</h1>

                <div className="flex flex-row items-center justify-center w-full my-8">

                    <div className="px-6 max-w-fit overflow-x-auto">

                        <RankingTable />

                    </div>

                </div>

            </div>
        </div>
    </>;
}