import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import DetailedView from "./Detailedview";
import EditForm from "./EditForm";

function GridComponent() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editForm, setEditForm] = useState({});
  console.log(selectedStudent);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response.data[0].company.name);
          const fetchData = response.data.map((std, index) => ({
            id: index,
            name: std.name,
            age: Math.floor(Math.random() * 100 + 18),
            gender: std.gender == "Mr" ? "Male" : "Female",
            maths: Math.floor(Math.random() * 100),
            physics: Math.floor(Math.random() * 100),
            english: Math.floor(Math.random() * 100),
            email: std.email,
            address: std.address.street + " " + std.address.city,
            phone: std.phone,
            company: std.company.name,
            website: std.website,
          }));

          setStudentData(fetchData);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, 1000);
    return () => {};
  }, []);
  const handleEdit = (index, event) => {
    event.stopPropagation();
    const studentToEdit = studentData[index];
    console.log("Editing student at index", index);
    setEditForm(studentToEdit);
    setEditingStudent(index);
  };

  const handleInputChange = ({ name, value }) => {
    setEditForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleDelete = (index, event) => {
    event.stopPropagation();
    const updatedData = studentData.filter((std, i) => i !== index);
    setStudentData(updatedData);
    console.log("Deleting student at index", index);
  };

  const handleViewDetails = (student, event) => {
    event.stopPropagation();
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
    setEditingStudent(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedData = studentData.map((student, index) =>
      index === editingStudent ? { ...student, ...editForm } : student
    );
    setStudentData(updatedData);
    setEditingStudent(null);
  };

  if (loading) return <Loading />;

  if (error) return <p className="p-24">{error.message}</p>;

  if (selectedStudent) {
    return <DetailedView student={selectedStudent} onBack={handleBack} />;
  }
  return (
    <div className="grid md:grid-cols-3 gap-8 px-12 py-10 mx-auto">
      {studentData.map((Std, index) => {
        return editingStudent === index ? (
          <EditForm
            key={index}
            student={editForm}
            onSave={handleFormSubmit}
            onCancel={() => setEditingStudent(null)}
            onInputChange={handleInputChange}
          />
        ) : (
          <div
            key={index}
            onClick={(e) => handleViewDetails(Std, e)}
            className="border  hover:border-green-500 rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105 shadow-2xl"
          >
            <div className="  p-4 6  text-center font-bold rounded-t-xl">
              <p>{Std.name}</p>
            </div>
            <div className="px-2 sm:px-7 py-3  ">
              <p className="mt-2 text-left">
                <span className="font-semibold">Gender: </span>
                {Std.gender}
              </p>
              <p className="mt-2 text-left">
                <span className="font-semibold">Physics: </span>
                {Std.physics}
              </p>
              <p className="mt-2 text-left">
                <span className="font-semibold">Math: </span>
                {Std.maths}
              </p>
              <p className="mt-2 text-left">
                <span className="font-semibold">English: </span>
                {Std.english}
              </p>
              <div className="flex flex-wrap md:justify-around m-2">
                <button
                  onClick={(e) => handleEdit(index, e)}
                  className="border rounded-xl flex-grow m-2 p-2 md:px-6 lg:px-12 py-3 text-white font-bold
                  hover:text-blue-500
                  "
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handleDelete(index, e)}
                  className="border rounded-xl flex-grow
                   m-2 p-2 md:px-6 lg:px-12 py-3  text-white font-bold
                  bg-red-800
                   "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GridComponent;
