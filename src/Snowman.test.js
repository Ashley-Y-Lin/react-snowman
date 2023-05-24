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

it("renders the Snowman without crashing", function () {
  render(
    <Snowman
      photos={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
    />
  );
});

it("displays 'you lose', 'answer' when maxWrong is reached, and doesn't show the buttons", function () {
  const word = "apple";
  const maxWrong = 6;

  const { container } = render(
    <Snowman
      photos={[img0, img1, img2, img3, img4, img5, img6]}
      words={[word]}
      maxWrong={maxWrong}
    />
  );

    const buttons = container.querySelectorAll("button");
    let wrongGuessNum = 0;

    for (let i=0; wrongGuessNum<maxWrong; i++){
      if (word.includes(buttons[i].value ))continue;
      
      wrongGuessNum++;
      fireEvent.click(buttons[i]);
    }

  // expect the button area to have visibility hidden
  expect(
    container.querySelector('.buttonsArea')
  ).toHaveStyle('visibility: hidden')

  // expect the message "You lose" to be displayed
  expect(
    container.querySelector('.messageArea')
  ).toContainHTML("You lose");

  // expect the correct word to be displayed
  expect(
    container.querySelector('.messageArea')
  ).toContainHTML("apple");

  // expect it to match snapshot
  expect(container).toMatchSnapshot();
});