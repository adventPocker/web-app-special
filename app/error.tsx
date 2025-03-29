"use client";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen ">
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center text-white">
        <Image
          className="absolute inset-0 w-full h-full object-cover object-center Image to Fade In"
          src={"/bg_3.png"}
          width={1000}
          height={1000}
          alt="Banner Image"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center z-10">
          <h1 className="text-4xl sm:text-6xl font- font-bold leading-tight mb-4">
            {" "}
            Sorry Something went wrong!
          </h1>
          <button className="relative mt-8 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative">Try Again</span>
          </button>
        </div>
      </div>
    </div>
  );
}
