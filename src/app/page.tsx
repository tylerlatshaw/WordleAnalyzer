import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wordle Word Analyzer",
};

export default function Page() {
  return <>
    <div className="h-full mx-4 md:mx-0">
      <div className="main-content container w-full mx-auto flex flex-wrap mx-auto pt-28 md:pt-36 pb-16 md:pb-40">

        <h1 className="w-full pb-8 text-3xl text-black md:text-4xl font-bold text-center">Wordle Word Analyzer</h1>

        <div className="w-1/3 flex mx-auto space-y-2 bg-yellow-500">

          <div className="w-full flex space-x-2">

            <div className="w-1/5 aspect-square bg-red-500">
              <input className="border-2 border-gray-300 uppercase text-center w-full aspect-square" type="text" maxLength={1} />
            </div>
            <div className="w-1/5 aspect-square bg-red-500">
              <input className="border-2 border-gray-300 uppercase text-center w-full aspect-square" type="text" maxLength={1} />
            </div>
            <div className="w-1/5 aspect-square bg-red-500">
              <input className="border-2 border-gray-300 uppercase text-center w-full aspect-square" type="text" maxLength={1} />
            </div>
            <div className="w-1/5 aspect-square bg-red-500">
              <input className="border-2 border-gray-300 uppercase text-center w-full aspect-square" type="text" maxLength={1} />
            </div>
            <div className="w-1/5 aspect-square bg-red-500">
              <input className="border-2 border-gray-300 uppercase text-center w-full aspect-square" type="text" maxLength={1} />
            </div>

          </div>

        </div>

      </div>
    </div>
  </>;
}