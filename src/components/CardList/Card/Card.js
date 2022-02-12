import React, { useCallback, useEffect, useState } from "react";
import "./styles.scss";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import { TODAY } from "/src/utils/constants";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

//FSM-------------------------------------------------------------------
const cardMachine = createMachine({
  id: "cardMachine",
  initial: "frontside",
  states: {
    frontside: {
      on: {
        TOGGLE: "backside",
      },
    },
    backside: {
      on: {
        FINISH_TASK: "taskcomplite",
        BACK_TO_TASK: "frontside",
      },
    },
    taskcomplite: {},
  },
});
//FSM-------------------------------------------------------------------

export const Card = ({ reward, task, id }) => {
  const [current, send] = useMachine(cardMachine);

  const [toggleClass, setToggleClass] = useState({ active: false });

  const toggleClassFunc = useCallback(() => {
    setToggleClass({ active: !toggleClass.active });
    // console.log(toggleClass.active)
  }, [toggleClass]);

  //Closing state----------------------------------------
  const [isTaskDone, setTaskDone] = useState(false);
  const handleTaskDone = () => {
    const collectionRef = collection(db, "history");
    addDoc(collectionRef, { [TODAY]: { reward, task } });
    (() => {
      send("FINISH_TASK");
    })();
    setTimeout(() => {
      setTaskDone(true);
    }, 3000);
  };

  //----------------------------------------

  const cardColor = () => {
    if (reward >= 10 && reward < 75) {
      return "lowest-reward";
    } else if (reward < 100) {
      return "low-reward";
    } else if (reward < 125) {
      return "high-reward";
    } else if (reward >= 125) {
      return "highest-reward";
    } else {
      return "";
    }
  };

  if (id === "history") {
    return (
      <>
        <div>{date}</div>
        <li className={`carditem ${cardColor()}`}>
          <div className="carditem-front">
            <div className="carditem-reward-wrp">
              <span className="carditem-reward">{reward}</span>
            </div>
            <p className="carditem-text">{task}</p>
          </div>
        </li>
      </>
    );
  }

  return (
    <li
      className={`carditem ${cardColor()} ${
        toggleClass.active ? "is-flipped" : null
      } ${isTaskDone && "cardClosed"}`}
    >
      {current.matches("frontside") && (
        <div
          onClick={() => {
            send("TOGGLE");
            toggleClassFunc();
          }}
          className="carditem-front"
        >
          <div className="carditem-reward-wrp">
            <span className="carditem-reward">{reward}</span>
          </div>
          <p className="carditem-text">{task}</p>
        </div>
      )}

      {current.matches("backside") && (
        <div className="carditem-back">
          <p className="carditem-back-text">did you {task}?</p>

          <div className="carditem-btn-wrp">
            <button
              className="carditem-btn carditem-btn-notdone"
              onClick={() => {
                send("BACK_TO_TASK");
                toggleClassFunc();
              }}
            >
              <svg
                className="carditem-btn-svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M37.0834 4.55919L33.4409 0.916687L19 15.3575L4.55919 0.916687L0.916687 4.55919L15.3575 19L0.916687 33.4409L4.55919 37.0834L19 22.6425L33.4409 37.0834L37.0834 33.4409L22.6425 19L37.0834 4.55919Z" />
              </svg>
            </button>
            <button
              className="carditem-btn carditem-btn-done"
              onClick={handleTaskDone}
            >
              <svg
                className="carditem-btn-svg"
                width="36"
                height="27"
                viewBox="0 0 36 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.4L3.59999 13L0.799988 15.8L12 27L36 3.00001L33.2 0.200012L12 21.4Z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {current.matches("taskcomplite") && (
        <div className="carditem-complite">
          <svg
            className="carditem-circle-img"
            width="122"
            height="122"
            viewBox="0 0 122 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="61"
              cy="61"
              r="60"
              stroke="#FF8933"
              strokeDasharray="5 5"
            />
          </svg>
          <svg
            className="carditem-welldone-img"
            width="67"
            height="51"
            viewBox="0 0 67 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.75 40.375L6 24.625L0.75 29.875L21.75 50.875L66.75 5.875L61.5 0.625L21.75 40.375Z"
              fill="#FF8933"
            />
          </svg>
          <p className="carditem-complite-text">Well done!</p>
          <p className="carditem-complite-points">
            You earned {reward} Help Coins!{" "}
          </p>
        </div>
      )}
    </li>
  );
};
