import React from "react";
import "./Club.css";

function Club(props) {
  const totalPlayer = props.selectedPlayers.length;

  const totalBudget = props.selectedPlayers.reduce(
    (accumulator, current) => accumulator + current.salary,
    0
  );

  return (
    <div className="club-info">
      <h2 className="club-info__title">Selected Players</h2>
      <h2 className="club-info__total">
        Players: <span>{totalPlayer}</span>
      </h2>
      <h2 className="club-info__total-budget">
        Budget: <span>{totalBudget}$</span>
      </h2>
      <ul className="club-info__selected-players selected-players">
        {props.selectedPlayers.map((player) => {
          return (
            <li className="selected-players__item">
              <strong className="selected-players__name">{player.name}</strong>
              <p className="selected-players__salary">
                Salary: {player.salary}$
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Club;
