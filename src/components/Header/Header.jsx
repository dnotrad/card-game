import React from "react";
import { useSelector } from "react-redux";
import s from "./Header.module.css";
import { startGame } from "../../store/mainReducer";
import { useDispatch } from "react-redux";
import { formatSeconds } from "../../helpers/timerView";
const Header = () => {
  const { cardsGuessed, isGameStart, gameTimer } = useSelector(
    (state) => state.mainReducer
  );
  const dispatch = useDispatch();
  return (
    <div className={s.header}>
      <div className={s.timer}>{formatSeconds(gameTimer)}</div>
      <div className={s.counter}>
        {cardsGuessed}
        <span>/16</span>
      </div>
      <button
        disabled={isGameStart}
        className={`${s.button} ${isGameStart && s.hide}`}
        onClick={() => dispatch(startGame())}
      >
        старт
      </button>
    </div>
  );
};

export default Header;
