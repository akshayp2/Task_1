import React from "react";
import Input from "./Input";

function EditForm({ student, onSave, onCancel, onInputChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target; // Ensure e.target is defined and has the name and value properties
    onInputChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(); // Save changes
  };

  return (
    <div>
      <form
        className="flex flex-col border rounded-2xl overflow-hidden text-black p-2"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="name" // Ensure this matches editForm keys
          value={student.name || ""}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="age"
          value={student.age || ""}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="physics"
          value={student.physics || ""}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="maths"
          value={student.maths || ""}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="english"
          value={student.english || ""}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          value={student.address || ""}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="company"
          value={student.company || ""}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="website"
          value={student.website || ""}
          onChange={handleChange}
        />
        <div className="flex flex-wrap">
          <button
            className="border flex-grow m-2 lg:px-12 py-3 rounded text-white font-bold"
            type="submit"
            onClick={onSave}
          >
            Save
          </button>
          <button
            className="border flex-grow m-2 lg:px-12 py-3 rounded text-white font-bold"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
