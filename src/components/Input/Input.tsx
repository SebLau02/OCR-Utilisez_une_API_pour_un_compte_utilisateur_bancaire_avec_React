import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};
function Input({ label, ...props }: InputProps) {
  return (
    <div className="Input-Base">
      <label
        htmlFor={props.id}
        style={{
          fontWeight: "bold",
        }}
      >
        {label}
      </label>
      <input {...props} />
    </div>
  );
}

export default Input;
