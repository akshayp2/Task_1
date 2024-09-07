// DetailedView.js
import React from "react";

function DetailedView({ student, onBack }) {
  return (
    <div className="p-10">
      <div className="p-2 md:p-6 max-w-1/2 md:max-w-screen-2/3 border w-full mx-auto  shadow-lg rounded-lg">
        <button
          onClick={onBack}
          className="mb-4 px-6 md:px-14 py-4 bg-red-500 text-red-200 hover:scale-105 transition duration-500 hover:text-white rounded-lg"
        >
          Back
        </button>
        <div className="flex items-center space-y-4 flex-col text-2xl ">
          <div className="   space-y-8 flex-col text-sm lg:text-2xl ">
            <h1 className="text-4xl font-bold mb-4">{student.name}</h1>
            <p className="mb-2">
              <span className="font-semibold">Age:</span> {student.age}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Gender:</span> {student.gender}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Physics:</span> {student.physics}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Math:</span> {student.maths}
            </p>
            <p className="mb-2">
              <span className="font-semibold">English:</span> {student.english}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Address:</span> {student.address}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Company:</span> {student.company}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Website:</span> {student.website}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedView;
