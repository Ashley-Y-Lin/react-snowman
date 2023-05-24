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
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
      />
      );
    });

it("displays you lose when maxWrong is reached", function () {
  const maxWrong = 6;

  const { container } = render(
    <Snowman
    images={[img0, img1, img2, img3, img4, img5, img6]}
    words={["apple"]}
    maxWrong={maxWrong}
    />
    );

  const letters = ["z", "b", "c", "d", "y", "f"];

  for (let i = 0; i < maxWrong; i++) {
    let letterButton = container.querySelector(`button[value=${letters[i]}]`);
    console.log("letterButton", letterButton)
    fireEvent.click(letterButton);
  }

  // expect the button area to not exist
  expect(
    container.querySelector('.buttonsArea')
  ).not.toBeInTheDocument();

  // expect the message area to contain "you lose" and "apple"
  expect(
    container.querySelector('.messageArea')
  ).toContainHTML("You lose", "apple");

  expect(
    container.querySelector('.messageArea')
  ).toContainHTML("apple");

  // expect it to match snapshot
  expect(container).toMatchSnapshot();
});