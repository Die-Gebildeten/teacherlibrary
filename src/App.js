import React from "react";
import AddLessonPage from "./pages/AddLessonPage";
import LessonPage from "./pages/LessonPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Link to="/add">Add Lesson</Link>
      <Switch>
        <Route path="/add">
          <AddLessonPage />
        </Route>
        <Route path = "/"><LessonPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
