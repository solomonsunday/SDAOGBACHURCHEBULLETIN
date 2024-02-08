import React, { useImperativeHandle } from "react";

interface Props {
  placeHolder: string;
  type: string;
  disabled?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ placeHolder, type, className, disabled = false, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <input
        ref={inputRef}
        className={` ${className} h-full w-full p-5 rounded-xl border border-black font-poppins text-black focus:outline-none`}
        placeholder={placeHolder}
        type={type}
        onWheel={(e) => e.currentTarget.blur()}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
