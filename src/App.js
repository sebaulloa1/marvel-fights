import { Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import Fight from "./pages/Fight";
import Home from "./pages/Home";

export const API_KEY = "80727d5bf08d5acb7187fa7a3a48a957";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/fight">
          <Fight />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
