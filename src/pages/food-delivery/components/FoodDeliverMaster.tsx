import TextField from "@/components/controls/TextField";
import type { FoodDeliverMasterFormType } from "@/types";
import { useFormContext } from "react-hook-form";

function FoodDeliverMaster() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FoodDeliverMasterFormType>();

  return (
    <>
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
    </>
  );
}

export default FoodDeliverMaster;
