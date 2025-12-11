"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
export default function Page() {
  const [number, setNumber] = useState<any>(0);
  const { theme, setTheme } = useTheme();
  const add = () => {
    setNumber(number + 1);
  };
  const sub = () => {
    setNumber(number > 0 ? number - 1 : 0);
  };
  return (
    <div className="h-screen w-screen gap-6 flex flex-col text-6xl justify-center items-center text">
      <p>Counter</p>
      <p className="font-bold ">{number}</p>
      <div className="flex-row flex gap-14">
        <div
          className=" border rounded-full border-gray-500 p-3 hover:cursor-pointer justify-center items-center "
          onClick={add}
        >
          +
        </div>
        <div
          className=" w-15 border rounded-full border-gray-500 p-3 hover:cursor-pointer justify-center items-center"
          onClick={sub}
        >
          -
        </div>
      </div>
    </div>
  );
}
