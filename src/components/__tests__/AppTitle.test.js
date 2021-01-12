import { mount } from "enzyme";
import AppTitle from "../AppTitle";

let wrapped;
beforeEach(() => {
  wrapped = mount(<AppTitle />);
});

afterEach(() => {
  wrapped.unmount();
});

it("shows h1 inside", () => {
  expect(wrapped.find("h1").length).toEqual(1);
});
