import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import RenderCount from "./RenderCount";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

const RenderCountComponent = RenderCount();

function FoodDeliveryForm() {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

  function onSumbit(formData: FoodDeliveryFormType) {
    console.log("form data", formData);
  }

  function onError(errors: FieldErrors<FoodDeliveryFormType>) {
    console.log("errors", errors);
  }

  // "handleSubmit" will validate your inputs before invoking "onSubmit"
  // register your input into the hook by invoking the "register" function
  return (
    <form
      className="m-4"
      autoComplete="off"
      onSubmit={handleSubmit(onSumbit, onError)}
    >
      <h1>RHF</h1>
      <RenderCountComponent />

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name ..."
          {...register("customerName", {
            required: "Customer name is required.",
          })}
        />
        <label>Customer Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Mobile ..."
          {...register("mobile", {
            required: "Mobile number is required.",
          })}
        />
        <label>Mobile</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FoodDeliveryForm;
