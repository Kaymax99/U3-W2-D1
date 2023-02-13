import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
/* import AllTheBooks from "./components/AllTheBooks"; */
import MyFooter from "./components/MyFooter.jsx";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList props={fantasy} />
      <MyFooter />
    </>
  );
}

export default App;
