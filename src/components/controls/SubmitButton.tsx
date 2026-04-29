import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import RenderCount from "../RenderCount";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    isSubmitting?: boolean;
  };

const RenderCountComponent = RenderCount();

function SubmitButton({
  isSubmitting = undefined,
  className = "btn-light",
  children,
  ...other
}: SubmitButtonProps) {
  return (
    <>
      <RenderCountComponent />

      <button
        type="submit"
        className={`btn ${className}`}
        disabled={isSubmitting == undefined ? false : isSubmitting}
        {...other}
      >
        {isSubmitting === undefined || isSubmitting === false ? (
          children
        ) : (
          <>
            {/* https://getbootstrap.com/docs/5.3/components/spinners/#buttons */}
            <span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"
            />
            <span role="status" className="ms-1">
              {children}
            </span>
          </>
        )}
      </button>
    </>
  );
}

export default SubmitButton;
