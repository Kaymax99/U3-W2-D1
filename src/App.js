import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
/* import AllTheBooks from "./components/AllTheBooks"; */
import MyFooter from "./components/MyFooter.jsx";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selected: null,
  };

  setSelected = (value) => {
    this.setState({ selected: value });
  };

  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        <Row className="mx-2">
          <Col xs={9}>
            <BookList props={fantasy} setSelected={this.setSelected} />
          </Col>
          <Col xs={3}>
            <CommentArea selected={this.state.selected} />
          </Col>
        </Row>
        <MyFooter />
      </>
    );
  }
}

export default App;
