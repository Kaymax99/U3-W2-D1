import { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Col xs={12} md={6} lg={3} className="my-2">
          <Card
            style={{ border: this.state.selected ? "2px solid red" : "" }}
            className="text-center"
          >
            <Card.Img
              variant="top"
              src={this.props.book.img}
              style={{ aspectRatio: 1 / 1.5 }}
              onClick={() => this.setState({ selected: !this.state.selected })}
            />
            <Card.Body>
              <Card.Title className="text-truncate fs-4">
                {this.props.book.title}
              </Card.Title>
              <div className="d-flex align-items-center justify-content-center">
                <Card.Text className="mb-0 me-3">
                  {this.props.book.price}€
                </Card.Text>
                <Button variant="primary">Buy Now!</Button>
              </div>
            </Card.Body>
            {this.state.selected && <CommentArea id={this.props.book.asin} />}
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;

/*  Pre conversione in classe

export const SingleBook = ({ book }) => {
  return (
    <>
      <Col xs={12} md={6} lg={3} className="my-2">
        <Card>
          <Card.Img
            variant="top"
            src={book.img}
            style={{ aspectRatio: 1 / 1.5 }}
          />
          <Card.Body>
            <Card.Title className="text-truncate fs-4">{book.title}</Card.Title>
            <div className="d-flex align-items-center justify-content-center">
              <Card.Text className="mb-0 me-3">{book.price}€</Card.Text>
              <Button variant="primary">Buy Now!</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
 */
