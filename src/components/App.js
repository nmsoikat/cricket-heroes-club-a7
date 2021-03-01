import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Player from "./Player/Player";
import fakeData from "../fakeData/fakeData";
import ClubPlayer from "./Club/Club";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // load fake data
  useEffect(() => {
    setPlayers(fakeData);
  }, []);

  // Invite button clicked
  function handlerInvitePlayer(e, player) {
    let duplicate = [];
    let newSelected = [...selectedPlayers, player];

    duplicate = newSelected.filter((NS) => NS._id === player._id);

    if (duplicate.length > 1) {
      newSelected = selectedPlayers.filter((SP) => SP._id !== player._id);
    }

    setSelectedPlayers(newSelected);
  }

  return (
    <div className="App">
      <Container fluid>
        <Row className="my-5">
          <Col>
            <h2 className="text-center text-danger">
              <FontAwesomeIcon icon={faMedal} />
              Cricket Heroes Club
              <FontAwesomeIcon icon={faMedal} />
            </h2>
          </Col>
        </Row>

        <Row>
          <Col md={7} lg={9}>
            <Row>
              {players.map((player) => (
                <Player
                  key={player._id}
                  handlerInvitePlayer={handlerInvitePlayer}
                  player={player}
                />
              ))}
            </Row>
          </Col>
          <Col md={5} lg={3}>
            <ClubPlayer selectedPlayers={selectedPlayers} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
