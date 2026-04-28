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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    // mode: "onSubmit",
    // reValidateMode: "onChange",
    // shouldFocusError: true,
    criteriaMode: "all",
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
      noValidate
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
            {errors.orderNo && (
              <div className="invalid-feedback text-start">
                {errors.orderNo?.message}
              </div>
            )}
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              placeholder="Mobile ..."
              {...register("mobile", {
                required: "Mobile is required.",
                minLength: { value: 10, message: "Must be 10 digits." },
                maxLength: { value: 11, message: "Must be 11 digits." },
              })}
            />
            <label>Mobile</label>
            {errors.mobile && (
              <div className="invalid-feedback text-start">
                {errors.mobile?.message}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${errors.customerName ? "is-invalid" : ""}`}
              placeholder="Customer Name ..."
              {...register("customerName", {
                required: "Customer Name is required.",
                minLength: { value: 3, message: "Must be at least 3 chars." },
                pattern: {
                  value: /[A-Z]/,
                  message: "Must include at least one uppercase letter.",
                },
                // validate: (value) =>
                //   value.trim() !== "" || "Customer Name cannot be empty spaces",
              })}
            />
            <label>Customer Name</label>
            {errors.customerName?.types &&
              // <>
              //   <div className="invalid-feedback text-start">
              //     {errors.customerName?.types.minLength}
              //   </div>
              //   <div className="invalid-feedback text-start">
              //     {errors.customerName?.types.pattern}
              //   </div>
              // </>
              Object.entries(errors.customerName.types).map(([type, msg]) => (
                <div className="invalid-feedback text-start" key={type}>
                  {msg}
                </div>
              ))}
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email ..."
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Incorrect email format.",
                },
                validate: {
                  notFake: (value) => {
                    return (
                      value !== "email@gmail.com" || "Don't use fake email."
                    );
                    // if (value === "email@gmail.com")
                    //   return "Particular email is blocked.";
                    // else return true;
                  },
                  notFromBlackListedDomain: (value, values) => {
                    // values.customerName
                    return (
                      (!value.endsWith("@xyz.com") &&
                        !value.endsWith("@example.com")) ||
                      "Domain is blocked."
                    );
                  },
                },
              })}
            />
            <label>Email</label>
            {errors.email && (
              <div className="invalid-feedback text-start">
                {errors.email?.message}
              </div>
            )}
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
