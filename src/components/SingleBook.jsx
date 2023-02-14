import { Col, Card, Button } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <>
      <Col xs={12} md={6} lg={3} className="my-2">
        <Card
          style={{
            border: props.selected === props.book.asin ? "2px solid red" : "",
          }}
          className="text-center"
          /* onClick={() => this.setState({ selected: !this.state.selected })} */
          onClick={() => props.setSelected(props.book.asin)}
        >
          <Card.Img
            variant="top"
            src={props.book.img}
            style={{ aspectRatio: 1 / 1.5 }}
          />
          <Card.Body>
            <Card.Title className="text-truncate fs-4">
              {props.book.title}
            </Card.Title>
            <div>
              <Card.Text className="mb-0">{props.book.price}€</Card.Text>
              <Button variant="primary">Buy Now!</Button>
            </div>
          </Card.Body>
          {/* {this.state.selected && <CommentArea id={this.props.book.asin} />} */}
        </Card>
      </Col>
    </>
  );
};

export default SingleBook;
