import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      author: "",
      comment: "",
      elementId: this.props.id,
      rate: 0,
    },
  };

  handleChange = (propertyName, propertyValue) => {
    const value =
      propertyName === "name" ? parseInt(propertyValue) : propertyValue;

    this.setState({
      comment: {
        ...this.state.comment,
        [propertyName]: value,
      },
    });
  };

  handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MGVlYmEyNDc4ZDAwMTNhMDU4NDEiLCJpYXQiOjE2NzU5NTU5NDcsImV4cCI6MTY3NzE2NTU0N30.3Pl8AeyDUGu2KlxPeZIwZPAJ7NWkyFFvIcFvTmwskOU",
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        alert("Thank you for submitting your review!");
      } else {
        alert("Unable to submit your review now, please try again later");
      }
    } catch (error) {
      alert("Error: ", error);
    }
  };

  render() {
    return (
      <>
        <h5 className="mt-3">Submit your review!</h5>
        <Form onSubmit={this.handleSumbit}>
          <Form.Group className="mb-3">
            <Form.Label>Vote</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                console.log(e.target.value);

                // this.setState({
                //   reservation: { ...this.state.reservation, numberOfPeople: parseInt(e.target.value) }
                // });
                this.handleChange("rate", e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="Insert a comment here"
              onChange={(e) => {
                console.log(e.target.value);

                // this.setState({ reservation: { ...this.state.reservation, specialRequests: e.target.value } });
                this.handleChange("comment", e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                console.log(e.target.value);
                this.handleChange("author", e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" className="mb-2" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
