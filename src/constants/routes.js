import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "../pages";
import { IsUserRedirect, ProjectedRouter } from "../helpers/router";
import { useAuthListener } from "../hooks";

export default function Routers() {
  const user = useAuthListener();
  //console.log(user);

  return (
    <>
      <Router>
        <Switch>
          <IsUserRedirect user={user} loggedInPath="/browse" path="/signin">
            <Signin />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath="/browse" path="/signup">
            <Signup />
          </IsUserRedirect>
          <ProjectedRouter user={user} path="/browse" exact>
            <Browse />
          </ProjectedRouter>
          <IsUserRedirect user={user} loggedInPath="/" path="/" exact>
            <Home />
          </IsUserRedirect>
        </Switch>
      </Router>
    </>
  );
}
