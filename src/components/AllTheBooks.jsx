import { Col, Container, Row, Button, Card } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container className="p-0">
      <Row>
        {fantasy.map((book) => (
          <Col xs={12} md={6} lg={3} className="my-2" key={book.asin}>
            <Card>
              <Card.Img
                variant="top"
                src={book.img}
                style={{ aspectRatio: 1 / 1.5 }}
              />
              <Card.Body>
                <Card.Title className="text-truncate fs-4">
                  {book.title}
                </Card.Title>
                <div className="d-flex align-items-center justify-content-center">
                  <Card.Text className="mb-0 me-3">{book.price}€</Card.Text>
                  <Button variant="primary">Buy Now!</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
