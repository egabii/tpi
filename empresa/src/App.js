import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { ProvideAuth, useAuth } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import PropiedadesPage from './pages/Propiedades/PropiedadesPage';
import NuevaPropiedad from './pages/Propiedades/NuevaPropiedad/AgregarMultimedia';
import AgendaPage from './pages/AgendaPage';
import LoginPage from './pages/Login/LoginPage';
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
    {...rest}
    render={({ location }) =>
      auth.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
    />
  );
};

function ProtectedPage() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/propiedades">
          <PropiedadesPage />
        </Route>
        <Route exact path="/agenda">
          <AgendaPage />
        </Route>
        <Route exact path="/nuevaPropiedad">
          <NuevaPropiedad />
        </Route>
      </Switch>
    </Layout>
  );
};

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}