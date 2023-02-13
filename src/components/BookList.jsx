import { Component } from "react";
import { Container, Form, Row } from "react-bootstrap";
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
        <Container className="p-0">
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
                <SingleBook book={books} key={books.asin} />
              ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default BookList;
