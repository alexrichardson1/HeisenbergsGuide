import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import NoPageFound from "./components/NoPageFound";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NoPageFound />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
