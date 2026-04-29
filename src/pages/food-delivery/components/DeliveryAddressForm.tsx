import TextField from "@/components/controls/TextField";
import RenderCount from "@/components/RenderCount";
import type { DeliveryAddressFormType } from "@/types";
import { useFormContext, useFormState } from "react-hook-form";

const RenderCountComponent = RenderCount();

function DeliveryAddressForm() {
  const { register } = useFormContext<{ address: DeliveryAddressFormType }>();
  const { errors } = useFormState<{ address: DeliveryAddressFormType }>({
    name: "address",
  });

  return (
    <>
      <RenderCountComponent />
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
    </>
  );
}

export default DeliveryAddressForm;
