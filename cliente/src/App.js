import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Catalogo from './pages/Catalogo';
import Homepage from './pages/Homepage';
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/catalogo">
          <Catalogo />
        </Route>
      </Switch>
      </Layout>
    </Router>
  );
};

export default App;
