import { Container } from "react-bootstrap";

const Welcome = () => (
  <div className="p-5 mb-4 bg-light rounded-3">
    <Container className="py-5">
      <h1 className="display-5 fw-bold">Welcome to DogeBooks</h1>
      <p className="fs-4">
        Here you can access the vast library of books that were passed down
        Doges through the centuries.
      </p>
      <button className="btn btn-primary btn-lg">Get Started!</button>
    </Container>
  </div>
);

export default Welcome;
