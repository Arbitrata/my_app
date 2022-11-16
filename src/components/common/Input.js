import React from "react";

export default function Input({
  name,
  lebel,
  type,
  email,
  inputStyle,
  textArea,
  message,
  ...rest
}) {
  return (
    <div
      className={`grid place-item-center mb-6 ${inputStyle ? inputStyle : ""} `}
    >
      <label
        className={"text-[15px] text-my-black opacity-70 font-extrabold ml-1 text-left"}
        htmlFor={name}
      >
        {lebel}
      </label>

      {textArea ? (
        <textarea
          className={`h-[160px] bg-my-white required text-my-black text-opacity-80 outline-none rounded-[5px] ring-1 ring-my-black ring-opacity-60 mt-0.5 text-md font-medium px-6 py-4 capitalize`}
          id={message}
          required
          name={name}
          {...rest}
        ></textarea>
      ) : (
        <input
          className={`h-[40px] outline-none required bg-my-white text-my-black text-opacity-80 rounded-[5px] mt-0.5 text-md ring-1 ring-my-black ring-opacity-60 font-medium px-6 py-1 ${
            email ? "lowercase" : "capitalize"
          }`}
          name={name}
          id={name}
          type={type}
          {...rest}
        ></input>
      )}
    </div>
  );
}
