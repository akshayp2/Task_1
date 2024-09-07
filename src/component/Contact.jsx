import React from "react";

function Contact() {
  return (
    <div className="px-12 py-8 bg-black text-white space-y-6 mx-auto">
      <h1 className="text-4xl text-center font-bold mb-4">Contact Us</h1>
      <div className="text-center">
        <p className="text-lg mb-4">
          If you have any questions or inquiries, feel free to reach out to us
          using the contact information below:
        </p>
        <div className="space-y-4">
          <p className="text-xl">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:akshaypatiledu@gmail.com
"
              className="text-blue-400 hover:underline"
            >
              akshaypatiledu@gmail.com
            </a>
          </p>
          <p className="text-xl">
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-blue-400 hover:underline">
              +1 (234) 567-890 "not real"
            </a>
          </p>
          <p className="text-xl">
            <strong>Address:</strong> India{" "}
          </p>
          <p className="text-xl">
            <strong>Social Media:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/akshaypatil17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/akshayp2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
