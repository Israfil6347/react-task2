import React from "react";

function InputPassword({ onChange }) {
  return (
    <>
      <label for="email">password</label>
      <input type="password" x-model="isPassword" onChange={onChange} />
    </>
  );
}

export default InputPassword;
