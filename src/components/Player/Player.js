import React from "react";
import "./Player.css";
import { Col } from "reactstrap";

function Player(props) {
  const { name, image, salary } = props.player;

  // Invite button clicked dom modify
  function inviteHandle(event) {
    const elm = event.target;

    if (elm.parentElement.classList.contains("player")) {
      elm.parentElement.classList.toggle("invited");

      if (elm.classList.contains("btn-success")) {
        elm.classList.remove("btn-success");
        elm.classList.add("btn-danger");
      } else {
        elm.classList.remove("btn-danger");
        elm.classList.add("btn-success");
      }
    }
  }

  return (
    <Col lg={4} xl={3}>
      <div className="player" onClick={inviteHandle}>
        <figure>
          <img src={image} />
        </figure>
        <strong className="player__name">{name}</strong>
        <p className="player__salary">Salary: {salary}$</p>
        <button
          onClick={(event) => props.handlerInvitePlayer(event, props.player)}
          className="btn btn-success btn-sm"
        >
          Invite
        </button>
      </div>
    </Col>
  );
}

export default Player;
