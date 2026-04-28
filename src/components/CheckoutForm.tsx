import type { CheckoutFormType, SelectOptionType } from "@/types";
import { useFormContext } from "react-hook-form";
import SelectField from "./controls/SelectField";

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

function CheckoutForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormType>();

  return (
    <>
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
    </>
  );
}

export default CheckoutForm;
