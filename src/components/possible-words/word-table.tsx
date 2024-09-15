"use client";

import { Button } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import axios from "axios";

import { WordType } from "@/app/lib/type-library";
import { LoadingTable } from "./loading-table";

const columnHelper = createColumnHelper<WordType>();

const columns = [
    columnHelper.accessor("Word", {
        cell: info => info.getValue(),
        header: () => <span>Word</span>,
        sortingFn: "alphanumeric",
        sortUndefined: "last",
        sortDescFirst: false,
    }),
    columnHelper.accessor(row => row.Score, {
        id: "Score",
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Score</span>,
        sortingFn: "alphanumeric",
        sortUndefined: "last",
        sortDescFirst: true,
    })
];

export type SortDirection = "asc" | "desc";

export function DataTable() {

    const [data, setData] = useState<WordType[]>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    const tdStyle = "px-2 py-1 w-1/2 border border-gray-500 text-center";
    const btnStyle = "px-2 py-2 w-16 bg-gray-300 disabled:bg-gray-100 hover:bg-gray-200 shadow font-lg text-gray-500 font-semibold";

    useEffect(() => {
        axios.get("/api/get-possible-words").then((response) => {
            setData(response.data);
        });
    }, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        },
    });

    return (
        <div className="p-2 mx-auto w-full">
            <table className="mx-auto w-full sm:w-2/3 md:w-2/5 lg:1/4">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="bg-gray-300">
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className={tdStyle + " font-semibold"}>
                                    {header.isPlaceholder ? null : <>
                                        <div className={header.column.getCanSort() ? "cursor-pointer select-none" : ""}
                                            onClick={header.column.getToggleSortingHandler()}
                                            title={header.column.getCanSort() ? header.column.getNextSortingOrder() === "asc"
                                                ? "Sort Ascending"
                                                : header.column.getNextSortingOrder() === "desc"
                                                    ? "Sort Descending"
                                                    : "Clear Sort"
                                                : undefined
                                            }>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {" "}
                                            {{ asc: <KeyboardArrowUpIcon />, desc: <KeyboardArrowDownIcon /> }[header.column.getIsSorted() as string] ?? <SortIcon />}
                                        </div>
                                    </>
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {
                        data.length === 0 ? <LoadingTable /> : null
                    }
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="hover:bg-green-400">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className={tdStyle}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                {/* <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(
                                        header.column.columnDef.footer,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot> */}
            </table>

            <div className="flex justify-center mt-4 mx-auto w-full space-x-2">
                <Button className={btnStyle} onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>{<KeyboardDoubleArrowLeftIcon />}</Button>
                <Button className={btnStyle} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>{<KeyboardArrowLeftIcon />}</Button>
                <Button className={btnStyle} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{<KeyboardArrowRightIcon />}</Button>
                <Button className={btnStyle} onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>{<KeyboardDoubleArrowRightIcon />}</Button>

                <select className={btnStyle} value={table.getState().pagination.pageSize} onChange={e => {
                    table.setPageSize(Number(e.target.value));
                }}>
                    {[10, 25, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>{pageSize}</option>
                    ))}
                </select>
            </div>

        </div>
    );
}