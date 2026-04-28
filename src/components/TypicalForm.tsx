import { useState, type ChangeEvent, type SubmitEvent } from "react";
import RenderCount from "./RenderCount";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

type FoodDeliveryFormErrorType = {
  customerName: string;
  mobile: string;
};

const RenderCountComponent = RenderCount();

function TypicalForm() {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    customerName: "",
    mobile: "",
  });
  const [errors, setErrors] = useState<FoodDeliveryFormErrorType>({
    customerName: "",
    mobile: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function validateFormData() {
    const tempErrors: FoodDeliveryFormErrorType = {
      customerName: "",
      mobile: "",
    };
    if (values.customerName.trim() === "")
      tempErrors.customerName = "Customer name is required.";
    if (values.mobile.trim() === "")
      tempErrors.mobile = "Mobile number is required.";
    setErrors(tempErrors);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    return Object.values(tempErrors).every((x) => x === "");
  }

  function onSumbit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (validateFormData()) console.log("form data", values);
    else console.log("form is invalid");
  }

  return (
    <form className="m-4" autoComplete="off" onSubmit={onSumbit}>
      <h1>Typical</h1>
      <RenderCountComponent />

      {/* https://getbootstrap.com/docs/5.3/forms/floating-labels/ */}
      <div className="form-floating mb-3">
        <input
          type="text"
          name="customerName"
          className="form-control"
          placeholder="Customer Name ..."
          value={values.customerName}
          onChange={handleInputChange}
        />
        <label>Customer Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          name="mobile"
          className="form-control"
          placeholder="Mobile ..."
          value={values.mobile}
          onChange={handleInputChange}
        />
        <label>Mobile</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default TypicalForm;
