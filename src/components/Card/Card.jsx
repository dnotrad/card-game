import React from "react";
import s from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCardOpen } from "../../store/mainReducer";
const Card = ({ data }) => {
  // data = { id: number, isOpen: boolean, value: string, isOnBoard: boolean },
  const dispatch = useDispatch();
  const { isInterfaceBlocked, isGameStart } = useSelector(
    (state) => state.mainReducer
  );
  function openCard(id, value) {
    dispatch(setCardOpen(id, value));
  }
  return (
    <button
      disabled={isInterfaceBlocked || !data.isOnBoard || !isGameStart || data.isOpen}
      className={`${s.card} ${data.isOpen && s.active} ${
        !data.isOnBoard && s.hide
      } ${!isGameStart && s.disabled}`}
      onClick={() => openCard(data.id, data.value)}
    >
      <div className={s.front}></div>
      <div className={s.back}>{data.value}</div>
    </button>
  );
};

export default Card;
