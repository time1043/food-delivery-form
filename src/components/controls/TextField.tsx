import { forwardRef, type ForwardedRef, type InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError | undefined;
};

const TextField = forwardRef(function TextField(
  { type = "text", className = "", label, error, ...other }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className="form-floating">
      <input
        type={type}
        className={`form-control ${error ? "is-invalid" : ""} ${className}`}
        placeholder={label}
        ref={ref}
        {...other}
      />
      <label>{label}</label>
      {error && (
        <div className="invalid-feedback text-start">{error?.message}</div>
      )}
    </div>
  );
});

export default TextField;
