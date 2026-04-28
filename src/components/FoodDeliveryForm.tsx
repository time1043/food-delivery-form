import type { SelectOptionType } from "@/types";
import type { FieldErrors } from "react-hook-form";
import { useForm } from "react-hook-form";
import SelectField from "./controls/SelectField";
import TextField from "./controls/TextField";
import RenderCount from "./RenderCount";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
  paymentMethod: string;
  deliveryIn: number | "";
  address: {
    streetAddress: string;
    landmark: string;
    city: string;
    state: string;
  };
};

// const paymentOptions: SelectOptionType[] = ["", "online", "COD"];
const paymentOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Paid Online" },
  { value: "COD", text: "Cash On Delivery" },
];

const deliveryInOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: 30, text: "Half an Hour" },
  { value: 60, text: "1 Hour" },
  { value: 120, text: "2 Hour" },
  { value: 180, text: "3 Hour" },
];

const RenderCountComponent = RenderCount();

function FoodDeliveryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
      paymentMethod: "",
      deliveryIn: "",
      address: {
        streetAddress: "",
        landmark: "",
        city: "",
        state: "",
      },
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
      noValidate
      onSubmit={handleSubmit(onSumbit, onError)}
    >
      <h1>RHF</h1>
      <RenderCountComponent />

      {/* .row.mb-2>.col*2 */}
      <div className="row mb-2">
        <div className="col">
          <TextField label="Order No" disabled {...register("orderNo")} />
        </div>
        <div className="col">
          <TextField
            label="Mobile"
            {...register("mobile", { required: "Mobile is required." })}
            error={errors.mobile}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <TextField
            label="Customer Name"
            {...register("customerName", {
              required: "Customer Name is required.",
            })}
            error={errors.customerName}
          />
        </div>
        <div className="col">
          <TextField
            label="Email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Incorrect email format.",
              },
            })}
            error={errors.email}
          />
        </div>
      </div>

      <div>list of ordered food items</div>
      <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
      <div className="row mb-2">
        <div className="col">
          <SelectField
            options={paymentOptions}
            label="Payment Method"
            {...register("paymentMethod", {
              required: "This field is required.",
            })}
            error={errors.paymentMethod}
          />
        </div>
        <div className="col">
          <SelectField
            options={deliveryInOptions}
            label="Delivery Within"
            {...register("deliveryIn", {
              required: "This field is required.",
              valueAsNumber: true,
            })}
            error={errors.deliveryIn}
          />
        </div>
      </div>

      <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Street Address"
            error={errors.address?.streetAddress}
            {...register("address.streetAddress", {
              required: "This field is required.",
            })}
          />
        </div>
        <div className="col">
          <TextField
            label="City"
            error={errors.address?.city}
            {...register("address.city", {
              required: "This field is required.",
            })}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <TextField label="Landmark" {...register("address.landmark")} />
        </div>
        <div className="col">
          <TextField label="State" {...register("address.state")} />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FoodDeliveryForm;
