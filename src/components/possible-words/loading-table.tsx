export function LoadingTable() {

    const tdStyle = "px-2 py-1 w-1/2 border border-gray-500 text-center";

    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        rows.map(row => (
            <tr key={row}>
                <td key={row} className={tdStyle}><div className="animate-pulse mx-auto my-1.5 h-3 w-16 bg-gray-300"></div></td>
                <td key={row} className={tdStyle}><div className="animate-pulse mx-auto my-1.5 h-3 w-16 bg-gray-300"></div></td>
            </tr>
        ))
    );
}