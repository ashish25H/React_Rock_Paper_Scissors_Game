import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import bgImg from "../images/bg-triangle.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../ScoreSlice";

const Hero = () => {
  //   const [score, setScore] = useState(0);
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();

  const result = document.getElementById("result");
  const container = document.getElementById("container");
  let count = 0;
  const [computerInput, setComputerInput] = useState("");
  const [user, setUser] = useState("");
  const [userImg, setUserImg] = useState("");
  const [computerImg, setComputerImg] = useState("");

  const setComputerInputState = () => {
    const randomNumber = Math.floor(Math.random() * (7 - 1) + 1);
    switch (randomNumber) {
      case 1:
        setComputerInput("rock");
        setComputerImg(rock);
        break;
      case 2:
        setComputerInput("paper");
        setComputerImg(paper);
        break;
      case 3:
        setComputerInput("scissors");
        setComputerImg(scissors);
        break;
      case 4:
        setComputerInput("rock");
        setComputerImg(rock);
        break;
      case 5:
        setComputerInput("paper");
        setComputerImg(paper);
        break;
      case 6:
        setComputerInput("scissors");
        setComputerImg(scissors);
        break;
      default:
        break;
    }
  };

  //   console.log(computerInput);

  const userInput = (name) => {
    console.log(name);
    setUser(name);
    switch (name) {
      case "rock":
        setUserImg(rock);
        container.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("block");
        break;
      case "paper":
        setUserImg(paper);
        container.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("block");
        break;
      case "scissors":
        setUserImg(scissors);
        container.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("block");
        break;
    }
  };

  const increment = () => {
    dispatch(increment());
  };

  const giveResult = () => {
    if (user === "rock" && computerInput === "scissors") {
      return "You Win";
    } else if (user === "paper" && computerInput === "rock") {
      return "You Win";
    } else if (user === "scissors" && computerInput === "paper") {
      return "You Win";
    } else if (user === computerInput) {
      return "Draw";
    } else {
      return "You Lose";
    }
  };

  useEffect(() => {
    setComputerInputState();
  }, []);

  return (
    <body className="h-[100vh] bg-gradient-to-br from-[#03203C] to-[#120E43] p-10">
      <div className="flex justify-between border-2 border-[#758283] rounded-xl w-[600px] p-4 mx-auto">
        <img className="w-[15%] " src={logo} alt="logo" />
        <div className="bg-[#CAD5E2]  pt-1 text-center rounded-xl">
          <p className="text-xs align-text-top text-[#03203C]">SCORE</p>
          <p className="text-6xl font-semibold text-[#758283] pl-6 pr-6 pb-4 ">
            {score}
          </p>
        </div>
      </div>

      <div
        id="container"
        className="mt-20 flex flex-col justify-center items-center"
        //   style={{
        //     backgroundImage: `url(${bgImg})`,
        //     backgroundRepeat: "no-repete",
        //     // backgroundSize: "600px",
        //     width:'310px',
        //     height:'277px',
        //     marginRight:'auto',
        //     marginLeft:'auto',

        //   }}
      >
        <div className="flex">
          <img
            id="rock"
            className="bg-[#CAD5E2] py-12 px-12 border-[15px] border-[#BF3325] rounded-full mr-10"
            src={rock}
            alt="rock"
            onClick={() => userInput("rock")}
          />
          <img
            id="paper"
            className="bg-[#CAD5E2] py-10 px-12 border-[15px] border-[#383CC1] rounded-full ml-10"
            src={paper}
            alt="paper"
            onClick={() => userInput("paper")}
          />
        </div>

        <div className="mx-auto">
          <img
            id="scissors"
            className="bg-[#CAD5E2] py-10 px-12 border-[15px] border-[#EDC126] rounded-full mt-10"
            src={scissors}
            alt="scissors"
            onClick={() => userInput("scissors")}
          />
        </div>
      </div>

      <div
        id="result"
        className="hidden flex justify-around items-center mt-28"
      >
        <div className="flex flex-col items-center">
          <img
            className="bg-[#CAD5E2] py-10 px-12 border-[15px] border-[#EDC126] rounded-full"
            src={computerImg}
            alt="computerInput"
          />
          <p className="text-[#CAD5E2] text-3xl mt-3">AI</p>
        </div>

        <span className="text-5xl font-semibold text-[#CAD5E2]">
          {giveResult()}
        </span>

        <div className="flex flex-col items-center">
          <img
            className="bg-[#CAD5E2] py-10 px-12 border-[15px] border-[#383CC1] rounded-full"
            src={userImg}
            alt="userInput"
          />
          <p className="text-[#CAD5E2] text-3xl mt-3">YOU</p>
        </div>
      </div>
    </body>
  );
};

export default Hero;
