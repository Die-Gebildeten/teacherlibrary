import React from "react";
import AddLessonPage from "./pages/AddLessonPage";
import LessonPage from "./pages/LessonPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

function App() {
  return (
    <>
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: "email",
              label:
                "Enter your school e-mail adress",
              placeholder:
                "e-mail",
              required: true,
            },
            {
              type: "password",
              label:
                "Choose a password",
              placeholder:
                "password",
              required: true,
            }
        
          ]}
        />
        <AmplifySignIn
          slot="sign-in"
          usernameAlias="email"
          headerText="Welcome to teacherlibrary"
        />

        <Router>
          <Switch>
            <Route path="/add">
              <AddLessonPage />
            </Route>
            <Route path="/">
              <LessonPage />
              <AmplifySignOut />
            </Route>
          </Switch>
        </Router>
      </AmplifyAuthenticator>
    </>
  );
}

export default App;
