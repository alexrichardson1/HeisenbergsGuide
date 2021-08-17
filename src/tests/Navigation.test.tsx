import renderer from "react-test-renderer";
import Navigation from "../components/Navigation";

test("renders correctly", () => {
  const tree = renderer.create(<Navigation />).toJSON();
  expect(tree).toMatchSnapshot();
});
