import { shallow } from "enzyme";
import App from "./App";
import ShoppingList from "./components/ShoppingList";
import ShoppingForm from "./components/ShoppingForm";

let wrapped = null;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a shopping list component", () => {
  expect(wrapped.find(ShoppingList).length).toEqual(1);
});

it("shows a shopping form component", () => {
  expect(wrapped.find(ShoppingForm).length).toEqual(1);
});
