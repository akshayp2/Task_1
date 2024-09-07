import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    setShowWelcome(false);
    navigate("/home"); // Ensure this matches the route for your home page
  };

  return (
    <div className="min-h-screen mx-auto bg-black text-white">
      {showWelcome ? (
        <div className="mx-auto welcome-message animate-fadeIn flex flex-col items-center justify-center p-32">
          <h1 className="text-2xl text-center md:text-6xl mb-4 bg-gradient-to-l from-blue-500 to-green-600 bg-clip-text text-transparent">
            Welcome to Our Website!
          </h1>
          <p className="text-lg md:px-10 text-center">
            This website showcases modern web development using React, Tailwind
            CSS, and various interactive components. Feel free to explore the
            features by navigating to the Home page or any other sections.
          </p>
          <button
            onClick={handleExploreClick}
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore Now
          </button>
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default App;
