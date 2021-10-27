import React, { useState, useEffect} from 'react';
import StatList from "./StatList";
import style from "./Feedback.module.css";

function Feedback() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [goodParcent, setGoodParcent] = useState(0);

  useEffect(() => setTotal(() => good + neutral + bad), [good, neutral, bad]);
  
  useEffect(() => setGoodParcent(() => Math.round(good / total * 100)), [good, total]);

    return (
    <div>
      <h2 className="stat__title">Пожалуйста, оставьте отзыв</h2>

        <button className={style.stat__button} name="good" type="button" onClick={() =>  setGood(good + 1)}>Хорошо</button>
        <button className={style.stat__button} name="neutral" type="button"onClick={() =>  setNeutral(neutral + 1)}>Нейтрально</button>
        <button className={style.stat__button} name="bad" type="button"onClick={() =>  setBad(bad + 1)}>Плохо</button>
        <h2 className="stat__title">Статистика</h2>
        {total > 0
          ? <StatList
          good = {good}
          neutral  = {neutral}
          bad = {bad}
          total = {total}
          goodParcent = {goodParcent}
          />
          : <p>Еще нет голосов</p> 
        }

    </div>
  )
  
}

export default Feedback;