import React from "react";

function Loading() {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-12 py-10 mx-auto">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="shadow-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-center font-bold rounded-t-xl h-12">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-shimmer"></div>
          </div>
          <div className="p-6 space-y-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-shimmer"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-shimmer"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-shimmer"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-shimmer"></div>
            <div className="flex justify-around mt-6">
              <div className="px-6 py-2 bg-gray-300 rounded-lg shadow-md w-24 h-8 animate-shimmer"></div>
              <div className="px-6 py-2 bg-gray-300 rounded-lg shadow-md w-24 h-8 animate-shimmer"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loading;
