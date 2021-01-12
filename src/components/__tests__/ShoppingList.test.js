import { mount } from "enzyme";

import ListProvider, { ListContext } from "../../context/ListContext";
import ShoppingList from "../ShoppingList";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <ListProvider listValue={["No Item Added", "Item guessed"]}>
      <ShoppingList />
    </ListProvider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("shows shopping item div", () => {
  expect(wrapped.find("div.shopping-list__item").length).toEqual(2);
});

it("renders a text inside", () => {
  expect(wrapped.render().text()).toContain("No Item Added");
});

it("should mock the shopping item data", () => {
  let newValueWrapped = mount(
    <ListProvider listValue={["6 Onions", "7 Potaroes", "8kg Sugar"]}>
      <ShoppingList />
    </ListProvider>
  );

  expect(newValueWrapped.find("div.shopping-list__item").length).toEqual(3);

  expect(newValueWrapped.render().text()).toContain("6 Onions");

  expect(newValueWrapped.render().text()).toContain("7 Potaroes");
  expect(newValueWrapped.render().text()).toContain("8kg Sugar");
});

it("deletes one item from the list", () => {
  wrapped.find("#shopping-btn-remove-0").simulate("click");
  wrapped.update();
  expect(wrapped.find("div.shopping-list__item").length).toEqual(1);
  expect(wrapped.render().text()).toContain("Item guessed");
});
