import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";

export default function NoDataFound(modifier: string) {
    return (
        <>
            <div className="text-gray-300 p-3">
                <div className="">
                    <FolderOffOutlinedIcon className="text-6xl"/>
                </div>
                <div className="pt-2 text-xl font-semibold">
                    No {modifier} Found
                </div>
            </div>
        </>
    );
}