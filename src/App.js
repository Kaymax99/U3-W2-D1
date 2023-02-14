import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
/* import AllTheBooks from "./components/AllTheBooks"; */
import MyFooter from "./components/MyFooter.jsx";
import BookList from "./components/BookList";
import { useState } from "react";
import fantasy from "./data/fantasy.json";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";

const App = () => {
  /*   state = {
    selected: null,
  }; */

  const [selected, setSelected] = useState(null);

  const setSelectedId = (value) => {
    /* this.setState({ selected: value }); */
    setSelected(value);
  };

  return (
    <>
      <MyNav />
      <Welcome />
      <Row className="mx-2">
        <Col xs={9}>
          <BookList
            props={fantasy}
            setSelected={setSelectedId}
            selected={selected}
          />
        </Col>
        <Col xs={3}>
          <CommentArea selected={selected} />
        </Col>
      </Row>
      <MyFooter />
    </>
  );
};

export default App;
