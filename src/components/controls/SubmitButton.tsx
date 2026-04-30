import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import RenderCount from "../RenderCount";
import { useFormState, type Control } from "react-hook-form";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    control?: Control<any, any>;
  };

const RenderCountComponent = RenderCount();

function SubmitButton({
  control = undefined,
  className = "btn-light",
  children,
  ...other
}: SubmitButtonProps) {
  // Without any fields
  // Way 1: wrapped with FormProvider (passing entire object) 🙅
  // Way 2 : useFormState's control prop ✅

  // https://react.dev/reference/rules/rules-of-hooks
  let isSubmitting = undefined;
  if (control) ({ isSubmitting } = useFormState({ control }));

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
