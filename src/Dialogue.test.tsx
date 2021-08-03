import renderer from "react-test-renderer";
import Dialogue from "./components/Dialogue";

test("renders correctly", () => {
  const tree = renderer.create(<Dialogue />).toJSON();
  expect(tree).toMatchSnapshot();
});
