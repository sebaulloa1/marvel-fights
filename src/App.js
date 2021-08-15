import { Route } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Route path="">
        <Home />
      </Route>
    </Layout>
  );
}

export default App;
