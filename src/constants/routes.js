import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "../pages";
export default function Routers() {
  return (
    <>
      <Router>
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}
