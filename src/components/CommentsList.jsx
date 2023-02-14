import { ListGroup } from "react-bootstrap";

const CommentList = (props) => {
  return (
    <ListGroup style={{ border: "none" }}>
      {props.array.length === 0 ? (
        <ListGroup.Item style={{ border: "none" }} className="bg-light">
          Nessun commento trovato :c
        </ListGroup.Item>
      ) : (
        props.array.map((comment) => (
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
};

export default CommentList;
