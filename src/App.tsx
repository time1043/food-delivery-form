import "./App.css";
import FoodDeliveryForm from "./components/FoodDeliveryForm";
import TypicalForm from "./components/TypicalForm";

function App() {
  return (
    <div className="container">
      <div className="d-flex">
        {/* https://react.dev/learn/manipulating-the-dom-with-refs */}
        <TypicalForm />
        <FoodDeliveryForm />
      </div>
    </div>
  );
}

export default App;
