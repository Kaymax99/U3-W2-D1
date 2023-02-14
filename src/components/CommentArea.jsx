import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";

const CommentArea = (props) => {
  /* state = {
    comments: [],
    lastCommentID: null,
  }; */
  const [comments, setComment] = useState([]);
  const [lastCommentID, setlastCommentID] = useState(null);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.selected,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MGVlYmEyNDc4ZDAwMTNhMDU4NDEiLCJpYXQiOjE2NzU5NTU5NDcsImV4cCI6MTY3NzE2NTU0N30.3Pl8AeyDUGu2KlxPeZIwZPAJ7NWkyFFvIcFvTmwskOU",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        /*         console.log(data); */
        setComment(data);
      } else {
        alert("Impossibile effettuare il fetch");
      }
    } catch (error) {
      alert("Errore: " + error);
    }
  };

  const addedComment = (value) => {
    setlastCommentID(value);
    fetchComments();
  };

  /* componentDidMount = () => { */
  useEffect(() => {
    /* console.log("Effettuo il mount dei commenti"); */
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selected]);

  /*  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selected !== this.props.selected) {
      fetchComments();
    }
  } */

  /*     console.log("Effettuo il render"); */
  return (
    <>
      <h5>Comments:</h5>
      {props.selected ? (
        <CommentList array={comments} />
      ) : (
        <p>Select a book to view its comments!</p>
      )}

      <AddComment selected={props.selected} addedComment={addedComment} />
    </>
  );
};

export default CommentArea;
