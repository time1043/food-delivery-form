import RenderCount from "@/components/RenderCount";
import type { FoodDeliveryFormType } from "@/types";
import type { FieldErrors } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import CheckoutForm from "./components/CheckoutForm";
import DeliveryAddressForm from "./components/DeliveryAddressForm";
import FoodDeliverMaster from "./components/FoodDeliverMaster";
import SubmitButton from "@/components/controls/SubmitButton";

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
  const { handleSubmit, control, getFieldState } = methods;

  async function onSumbit(formData: FoodDeliveryFormType) {
    // setTimeout(() => {}, 3000);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("form data", formData);
  }

  function onError(errors: FieldErrors<FoodDeliveryFormType>) {
    // console.log("errors", errors);
    // (name: string, formState?: Object) => ({isDirty, isTouched, invalid, error})
    console.log(getFieldState("address.city"));
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

      <SubmitButton {...{ control }}>Submit</SubmitButton>
    </form>
  );
}

export default FoodDeliveryForm;
