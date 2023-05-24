import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import "./Snowman.css";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

it("renders the carousel without crashing", function () {
  render(
    <Snowman
      photos={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
    />
  );
});

it("displays you lose when maxWrong is reached", function () {
  const { container } = render(
    <Snowman
      photos={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
    />
  );

  // expect the button area to have visibility hidden
  expect(
    container.querySelector('.buttonsOrMessageArea')
  ).toHaveStyle('visibility: hidden')

  // expect the message "You lose" to be displayed
  expect(
    container.querySelector('.buttonsOrMessageArea')
  ).toContainHTML("You lose");

  // expect the correct word to be displayed
  expect(
    container.querySelector('.buttonsOrMessageArea')
  ).toContainHTML("apple");

  // expect it to match snapshot
  expect(container).toMatchSnapshot();
});