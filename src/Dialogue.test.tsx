import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Dialogue from "./components/Dialogue";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Dialogue />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
