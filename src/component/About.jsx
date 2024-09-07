import React from "react";

function About() {
  return (
    <div className="px-12 py-8 mx-auto bg-black text-white border-2 border-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl text-center font-bold mb-6">
        About This Project
      </h1>
      <div className="text-wrap leading-loose mt-4">
        <p>
          This project showcases a modern web application built with React,
          demonstrating key concepts and functionality through various
          components:
        </p>
        <p className="mt-4">
          <strong className="text-yellow-400">Grid Component:</strong> Presents
          user data retrieved from the JSONPlaceholder API. This component
          allows users to view detailed information, edit existing entries, and
          delete them as needed. It features:
        </p>
        <ul className="list-disc list-inside mt-2 ml-6">
          <li>
            <strong className="text-yellow-400">
              Data Loading and Error Handling:
            </strong>{" "}
            Provides feedback during data fetch and error scenarios.
          </li>
          <li>
            <strong className="text-yellow-400">Interactive Features:</strong>{" "}
            Includes functionality for editing, deleting, and viewing detailed
            information of users.
          </li>
        </ul>
        <p className="mt-4">
          <strong className="text-yellow-400">Navbar:</strong>
        </p>
        <p className="mt-2">
          A responsive and intuitive navigation bar that adapts to both desktop
          and mobile views. Key features include:
        </p>
        <ul className="list-disc list-inside mt-2 ml-6">
          <li>
            <strong className="text-yellow-400">Dropdown Menus:</strong> For
            sublinks in the navigation, enhancing usability.
          </li>
          <li>
            <strong className="text-yellow-400">Responsive Design:</strong>{" "}
            Ensures a smooth user experience across different devices.
          </li>
        </ul>
        <p className="mt-4">
          <strong className="text-yellow-400">Routing and Layout:</strong>{" "}
          Utilizes React Router for seamless navigation between pages. The main
          layout, managed by the App component, includes:
        </p>
        <ul className="list-disc list-inside mt-2 ml-6">
          <li>
            <strong className="text-yellow-400">
              Dynamic Content Rendering:
            </strong>{" "}
            Controlled via React Router’s Outlet for rendering different
            components based on the route.
          </li>
        </ul>
        <p className="mt-4">
          The project emphasizes a clean and interactive UI, leveraging modern
          React features and responsive design principles to create an engaging
          user experience. Explore the features and see how the components work
          together!
        </p>
      </div>
    </div>
  );
}

export default About;
