import { mount } from "enzyme";

import ListProvider from "../../context/ListContext";
import ShoppingForm from "../ShoppingForm";
import ShoppingList from "../ShoppingList";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <ListProvider listValue={[]}>
      <ShoppingForm />
      <ShoppingList />
    </ListProvider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("renders one input and 1 button component", () => {
  expect(wrapped.find("button").length).toEqual(1);
  expect(wrapped.find("input").length).toEqual(1);
});

it("renders a text when user types in it", () => {
  wrapped.find("input").simulate("change", {
    target: {
      value: "asdasdasd",
    },
  });

  expect(wrapped.find("input").prop("value")).toEqual("asdasdasd");
});

it("adds a new item on the list", () => {
  wrapped.find("input").simulate("change", {
    target: {
      value: "New Text",
    },
  });
  wrapped.find("button").simulate("click");
  wrapped.update();
  expect(wrapped.find("div.shopping-list__item").length).toEqual(1);
  
  setTimeout(() => {
    wrapped.update();

    expect(wrapped.find("input").prop("value")).toEqual("");
  }, 100);
});
