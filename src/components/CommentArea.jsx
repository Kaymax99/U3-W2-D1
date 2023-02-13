import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
    lastCommentID: null,
  };

  fetchComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.selected,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MGVlYmEyNDc4ZDAwMTNhMDU4NDEiLCJpYXQiOjE2NzU5NTU5NDcsImV4cCI6MTY3NzE2NTU0N30.3Pl8AeyDUGu2KlxPeZIwZPAJ7NWkyFFvIcFvTmwskOU",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        alert("Impossibile effettuare il fetch");
      }
    } catch (error) {
      alert("Errore: " + error);
    }
  };

  addedComment = (value) => {
    this.setState({ lastCommentID: value });
    this.fetchComments();
  };

  componentDidMount = () => {
    console.log("Effettuo il mount");
    this.fetchComments();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selected !== this.props.selected) {
      this.fetchComments();
    }
  }

  render() {
    console.log("Effettuo il render");
    return (
      <>
        <h5>Comments:</h5>
        {this.props.selected ? (
          <CommentList array={this.state.comments} />
        ) : (
          <p>Select a book to view its comments!</p>
        )}

        <AddComment
          selected={this.props.selected}
          addedComment={this.addedComment}
        />
      </>
    );
  }
}

export default CommentArea;
