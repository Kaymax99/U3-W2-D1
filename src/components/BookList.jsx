import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };

  handleChange = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search book by title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a title"
            onChange={(e) => {
              /* console.log(e.target.value); */
              this.handleChange(e.target.value);
            }}
          />
        </Form.Group>

        <Row>
          {this.props.props
            .filter((e) =>
              e.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((books) => (
              <SingleBook
                book={books}
                key={books.asin}
                setSelected={this.props.setSelected}
              />
            ))}
        </Row>
      </>
    );
  }
}
export default BookList;
