import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <ListGroup style={{ border: "none" }}>
        {this.props.array.length === 0 ? (
          <ListGroup.Item style={{ border: "none" }} className="bg-light">
            Nessun commento trovato :c
          </ListGroup.Item>
        ) : (
          this.props.array.map((comment) => (
            <ListGroup.Item
              style={{ border: "none" }}
              key={comment._id}
              className="bg-light"
            >
              <div>
                <span>{comment.rate}⭐</span> <span>{comment.comment}</span>
              </div>
              <div>
                <span className="text-muted">- {comment.author}</span>
              </div>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    );
  }
}

export default CommentList;
