import { LetterResultType } from "@/app/lib/notion-type-library";

export default function RankingTable() {

    const tdStyle = "px-2 py-1 border border-gray-500 text-center";

    async function getData() {
        const res = await fetch(process.env.BASE_URL + "/api/get-letter-rankings");
        const data = await res.json();

        return data;
    }

    async function generateTable() {
        const data: LetterResultType[] = await getData();

        return <>
            {
                data.map((letter) => {
                    return <tr key={letter.id} className="hover:bg-green-400">
                        <td className={tdStyle + " font-semibold"}>{letter.properties.Name.title[0].plain_text}</td>
                        <td className={tdStyle}>{letter.properties.Position1Score.number}</td>
                        <td className={tdStyle}>{letter.properties.Position2Score.number}</td>
                        <td className={tdStyle}>{letter.properties.Position3Score.number}</td>
                        <td className={tdStyle}>{letter.properties.Position4Score.number}</td>
                        <td className={tdStyle}>{letter.properties.Position5Score.number}</td>
                    </tr>;
                })
            }
        </>;
    }

    return <>
        <table className="mx-auto w-full md:w-3/5">
            <thead className="bg-gray-300">
                <tr className="bg-gray-400">
                    <th rowSpan={2} className={tdStyle + " font-semibold"}>Letter</th>
                    <th colSpan={5} className={tdStyle + " font-semibold"}>Position</th>
                </tr>
                <tr>
                    <th className={tdStyle + " font-semibold"}>1</th>
                    <th className={tdStyle + " font-semibold"}>2</th>
                    <th className={tdStyle + " font-semibold"}>3</th>
                    <th className={tdStyle + " font-semibold"}>4</th>
                    <th className={tdStyle + " font-semibold"}>5</th>
                </tr>
            </thead>
            <tbody>
                {
                    generateTable()
                }
            </tbody>
        </table>
    </>;
}