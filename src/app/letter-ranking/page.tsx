import { Metadata } from "next/types";
import LoadingTable from "./../../components/letter-ranking/loading-table";
import RankingTable from "./../../components/letter-ranking/ranking-table";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Letter Ranking",
};

export default async function Page() {

    return <>
        <div className="h-full mx-4 md:mx-0">
            <div className="main-content container w-full mx-auto flex flex-wrap mx-auto pt-28 md:pt-36 pb-16 md:pb-24">

                <h1 className="w-full pb-8 text-3xl text-black md:text-4xl font-bold text-center">Letter Ranking</h1>

                <div className="flex flex-row items-center justify-center w-full my-8">

                    <div className="px-6 w-full overflow-x-auto">

                        <Suspense fallback={<LoadingTable />}>
                            <RankingTable />
                        </Suspense>

                    </div>

                </div>

            </div>
        </div>
    </>;
}