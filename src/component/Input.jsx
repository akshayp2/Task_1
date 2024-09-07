import React from "react";

function Input({ type, name, value, onChange }) {
  return (
    <div>
      <input
        className="p-2 mt-1 w-full rounded-xl border py-4"
        type={type}
        name={name}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
