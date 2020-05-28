import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "component/dist/main.css";
import Loader from "./Component/loader";
import { routes } from "./Routes/routes";
function App() {
  const routcomponent = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>{routcomponent}</Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
