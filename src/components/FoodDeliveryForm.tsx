import type { FieldErrors } from "react-hook-form";
import { useForm } from "react-hook-form";
import RenderCount from "./RenderCount";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

const RenderCountComponent = RenderCount();

function FoodDeliveryForm() {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
    },
  });

  function onSumbit(formData: FoodDeliveryFormType) {
    console.log("form data", formData);
  }

  function onError(errors: FieldErrors<FoodDeliveryFormType>) {
    console.log("errors", errors);
  }

  return (
    <form
      className="m-4"
      autoComplete="off"
      onSubmit={handleSubmit(onSumbit, onError)}
    >
      <h1>RHF</h1>
      <RenderCountComponent />

      {/* .row.mb-2>.col*2 */}
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Order No ..."
              disabled
              {...register("orderNo")}
            />
            <label>Order No</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
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
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Customer Name ..."
              {...register("customerName", {
                required: "Customer Name is required.",
              })}
            />
            <label>Customer Name</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="Email ..."
              {...register("email", {
                required: "Email is required.",
              })}
            />
            <label>Email</label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FoodDeliveryForm;
