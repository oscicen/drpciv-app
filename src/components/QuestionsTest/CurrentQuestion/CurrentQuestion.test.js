import { shallow } from "enzyme";

import CurrentQuestion from "./CurrentQuestion";

describe("CurrentQuestion render test", () => {
  it("renders without crashing", () => {
    shallow(<CurrentQuestion />);
  });
});
