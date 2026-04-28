import RenderCount from "@/components/RenderCount";
import type { FoodDeliveryFormType } from "@/types";
import type { FieldErrors } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import CheckoutForm from "./components/CheckoutForm";
import DeliveryAddressForm from "./components/DeliveryAddressForm";
import FoodDeliverMaster from "./components/FoodDeliverMaster";

const RenderCountComponent = RenderCount();

function FoodDeliveryForm() {
  const methods = useForm<FoodDeliveryFormType>({
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
  const { handleSubmit } = methods;

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

      <FormProvider {...methods}>
        <FoodDeliverMaster />
        <div>list of ordered food items</div>
        <CheckoutForm />
        <DeliveryAddressForm />
      </FormProvider>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FoodDeliveryForm;
