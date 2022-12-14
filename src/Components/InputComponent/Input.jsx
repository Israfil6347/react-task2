import React from "react";

function Input({ onChange, errorMessage }) {
  // console.log(errorMessage);
  return (
    <div class="">
      <label for="email" class="leading-7 text-sm text-gray-600">
        Email
      </label>

      <input
        className={`text-gray-500 ${
          errorMessage === null ? "border-red-600" : ""
        }`}
        id="email/Phone"
        placeholder="UserName"
        type="text"
        x-model="hasValue"
        onChange={onChange}
      />
      <p>{errorMessage}</p>
    </div>
  );
}

export default Input;
