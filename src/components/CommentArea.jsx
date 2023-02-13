import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
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
  componentDidMount = () => {
    console.log("Effettuo il mount");
    this.fetchComments();
  };

  render() {
    console.log("Effettuo il render");
    return (
      <>
        <h5>Comments:</h5>
        {/* {this.state.comments} */}
        <CommentList array={this.state.comments} />
        <AddComment id={this.props.id} />
      </>
    );
  }
}

export default CommentArea;
