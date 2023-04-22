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
  const [scoreCount, setScoreCount] = useState(0);
  let count = 0;

  const result = document.getElementById("result");
  const mobileResult = document.getElementById('mobileResult');
  const container = document.getElementById("container");

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

   // const increment = () => {
  //   if (user === "rock" && computerInput === "scissors") {
  //     count+=1;
  //     setScoreCount(count);
  //     // dispatch(increment());
  //   } else if (user === "paper" && computerInput === "rock") {
  //     count+=1;
  //     setScoreCount(count);
  //     // dispatch(increment());
  //   } else if (user === "scissors" && computerInput === "paper") {
  //     count+=1;
  //     setScoreCount(count);
  //     // dispatch(increment());
  //   }
  // };

  const userInput = (name) => {
    console.log(name);
    setUser(name);
    switch (name) {
      case "rock":
        setUserImg(rock);
        // increment();
        container.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("block");
        mobileResult.classList.remove("hidden");
        mobileResult.classList.add("block");
        break;
      case "paper":
        setUserImg(paper);
        // increment();
        container.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("block");
        mobileResult.classList.remove("hidden");
        mobileResult.classList.add("block");
        break;
      case "scissors":
        setUserImg(scissors);
        // increment();
        container.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("block");
        mobileResult.classList.remove("hidden");
        mobileResult.classList.add("block");
        break;
    }
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


  

  const playAgain = () => {                          //Play Again function
    setComputerInputState();
    result.classList.remove("block");
    result.classList.add("hidden");
    mobileResult.classList.remove("block");
    mobileResult.classList.add("hidden");
    container.classList.remove("hidden");
    container.classList.add("block");
  };

  const celibration = ()=>{

  }

  return (
    <body className="flex flex-col items-center pt-16 p-0 h-[100vh]  w-[100vw] sm:h-[100vh] bg-gradient-to-br from-[#03203C] to-[#120E43] sm:p-10">
      <div className="flex w-[100vw] p-2 m-2  sm:flex justify-between border-2 border-[#758283] rounded-xl sm:w-[600px] sm:p-4 sm:mx-auto">
        <img className="w-[15%] " src={logo} alt="logo" />
        <div className="bg-[#CAD5E2]  pt-1 text-center rounded-xl">
          <p className="text-xs align-text-top text-[#03203C]">SCORE</p>
          <p className="text-6xl font-semibold text-[#758283] pl-6 pr-6 pb-4 ">
            {scoreCount}
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
        <div className="flex justify-center items-center  sm:flex">
          <img
            id="rock"
            className="py-10 px-10 border-[10px] mr-10 bg-[#CAD5E2]  border-[#BF3325] rounded-full sm:py-12 sm:px-12 sm:border-[15px] sm:mr-10"
            src={rock}
            alt="rock"
            onClick={() => userInput("rock")}
          />
          <img
            id="paper"
            className="py-9 px-10 border-[10px]  bg-[#CAD5E2]  border-[#383CC1] rounded-full sm:py-10 sm:px-12 sm:border-[15px] sm:ml-10"
            src={paper}
            alt="paper"
            onClick={() => userInput("paper")}
          />
        </div>

        <div className="mx-auto">
          <img
            id="scissors"
            className="py-9 px-10 border-[10px] mt-10 bg-[#CAD5E2]  border-[#EDC126] rounded-full sm:py-10 sm:px-12 sm:border-[15px] sm:mt-10"
            src={scissors}
            alt="scissors"
            onClick={() => userInput("scissors")}
          />
        </div>
      </div>

      <div
        id="result"
        className="pt-28 sm:pt-0 flex justify-between items-center hidden  sm:mt-28"
      >
        <div className="flex flex-col items-center sm:mr-28">
          <img
            className="py-6 px-8 border-[10px] mr-5 bg-[#CAD5E2]  border-[#EDC126] rounded-full sm:py-10 sm:px-12 sm:border-[15px]"
            src={computerImg}
            alt="computerInput"
          />
          <p className="text-4xl mt-3 font-semibold text-[#CAD5E2] sm:text-3xl sm:mt-3">AI</p>
        </div>

        <div className="hidden sm:block sm:text-center">
          <div className="text-5xl font-semibold text-[#CAD5E2]">
            {giveResult()}
          </div>
          <button
            className="text-2xl text-[#242B2E] font-semibold bg-[#758283] p-2 mt-3 rounded-md"
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>

        <div className="flex flex-col items-center ">
          <img
            className="py-6 px-8 border-[10px] ml-5 bg-[#CAD5E2]  border-[#383CC1] rounded-full sm:py-10 sm:px-12 sm:border-[15px] sm:ml-28"
            src={userImg}
            alt="userInput"
          />
          <p className="text-4xl font-semibold mt-2 text-center text-[#CAD5E2] sm:text-3xl sm:mt-3">YOU</p>
        </div>

      </div>
      <div className="mt-10 hidden sm:hidden text-center" id="mobileResult">
          <div className="text-3xl font-semibold sm:text-5xl sm:font-semibold text-[#CAD5E2]">
            {giveResult()}
          </div>
          <button
            className="bg-[#ffffff] text-2xl text-[#242B2E] font-semibold sm:bg-[#758283] p-2 mt-3 rounded-md"
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>
    </body>
  );
};

export default Hero;
