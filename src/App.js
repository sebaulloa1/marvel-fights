import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import Fight from "./pages/Fight";
import Home from "./pages/Home";
import Rankings from "./pages/Rankings";
import { fetchTableData } from "./store/rankings-actions";

export const API_KEY = "80727d5bf08d5acb7187fa7a3a48a957";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/fight">
          <Fight />
        </Route>
        <Route path="/rankings">
          <Rankings />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
