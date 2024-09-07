import React from "react";

function ServicesComp() {
  return (
    <div className="min-h-screen bg-black text-white  sm:px-12 sm:py-8">
      <h1 className="sm:text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className=" flex flex-col md:flex-row gap-5 px-5">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="mb-4">
            We create responsive and visually appealing websites tailored to
            your needs. Our web development services include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Custom website design and development</li>
            <li>Frontend development using React.js</li>
            <li>Backend integration</li>
            <li>SEO optimization</li>
          </ul>
          <p>
            Our team leverages the latest technologies to build websites that
            not only look great but also perform well across all devices.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">App Development</h2>
          <p className="mb-4">
            We offer end-to-end mobile app development services to help you
            bring your app idea to life. Our services include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Mobile app design and development</li>
            <li>Cross-platform development with React Native</li>
            <li>API integration</li>
            <li>App testing and deployment</li>
          </ul>
          <p>
            Whether you need a native app or a cross-platform solution, our team
            has the expertise to deliver high-quality apps that meet your
            business objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesComp;
