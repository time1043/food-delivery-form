import type { SelectOptionType } from "@/types";
import {
  forwardRef,
  type ForwardedRef,
  type SelectHTMLAttributes,
} from "react";
import type { FieldError } from "react-hook-form";

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOptionType[];
  label: string;
  error?: FieldError | undefined;
};

const SelectField = forwardRef(function SelectField(
  { options, className = "", label, error, ...other }: SelectFieldProps,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  return (
    <div className="form-floating">
      <select
        className={`form-select ${error ? "is-invalid" : ""} ${className}`}
        ref={ref}
        {...other}
      >
        {options.map((x, indx) => (
          <option key={indx} value={typeof x === "string" ? x : x.value}>
            {typeof x === "string" ? x : x.text}
          </option>
        ))}
      </select>
      <label>{label}</label>
      {error && (
        <div className="invalid-feedback text-start">{error?.message}</div>
      )}
    </div>
  );
});

export default SelectField;
