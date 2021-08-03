import renderer from "react-test-renderer";
import NoPageFound from "./components/NoPageFound";

test("renders correctly", () => {
  const tree = renderer.create(<NoPageFound />).toJSON();
  expect(tree).toMatchSnapshot();
});
