import { shallow } from "enzyme";

import Ending from "./Ending";

describe("CurrentQuestion render test", () => {
  it("renders without crashing", () => {
    shallow(<Ending />);
  });
});
