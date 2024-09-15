export default function LoadingTable() {

    const tdStyle = "px-2 py-1 border border-gray-500 text-center";

    async function generateTable() {

        const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

        return <>
            {
                rows.map((row) => {
                    return <tr key={row}>
                        <td className={tdStyle + " font-semibold"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-300"></div></td>
                        <td className={tdStyle + " px-4"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-300"></div></td>
                        <td className={tdStyle + " px-4"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-300"></div></td>
                        <td className={tdStyle + " px-4"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-300"></div></td>
                        <td className={tdStyle + " px-4"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-300"></div></td>
                        <td className={tdStyle + " px-4"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-300"></div></td>

                    </tr>;
                })
            }
        </>;
    }

    return <>
        <table className="mx-auto w-full md:w-3/5">
            <thead className="bg-gray-300">
                <tr className="bg-gray-400">
                    <th rowSpan={2} className={tdStyle}><div className="animate-pulse mx-auto w-12 h-6 bg-gray-300"></div></th>
                    <th colSpan={5} className={tdStyle}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-300"></div></th>
                </tr>
                <tr>
                    <th className={tdStyle + " font-semibold"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-400"></div></th>
                    <th className={tdStyle + " font-semibold"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-400"></div></th>
                    <th className={tdStyle + " font-semibold"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-400"></div></th>
                    <th className={tdStyle + " font-semibold"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-400"></div></th>
                    <th className={tdStyle + " font-semibold"}><div className="animate-pulse mx-auto w-16 h-6 bg-gray-400"></div></th>
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