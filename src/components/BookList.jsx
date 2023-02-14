import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  /*  state = {
    search: "",
  }; */

  const [search, setSearch] = useState("");

  const handleChange = (search) => {
    setSearch(search);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search book by title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a title"
          onChange={(e) => {
            /* console.log(e.target.value); */
            handleChange(e.target.value);
          }}
        />
      </Form.Group>

      <Row>
        {props.props
          .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
          .map((books) => (
            <SingleBook
              book={books}
              key={books.asin}
              setSelected={props.setSelected}
              selected={props.selected}
            />
          ))}
      </Row>
    </>
  );
};

export default BookList;
