import { shallow } from "enzyme";

import Button from "./Button";

describe("Button render test", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });
});
