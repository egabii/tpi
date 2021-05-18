import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { ProvideAuth, useAuth } from './contexts/AuthContext';
import HomePage from './pages/HomePage/HomePage';
import PropiedadesPage from './pages/Propiedades/PropiedadesPage';
import NuevaPropiedad from './pages/Propiedades/NuevaPropiedad/AgregarMultimedia';
import AgendaPage from './pages/Agenda/AgendaPage';
import LoginPage from './pages/Login/LoginPage';
import CajaDeVenta from './pages/CajaDeVenta/Caja';
import CierreDeCaja from './pages/CierreDeCaja/Cierre';
import NuevoReporte from './pages/NuevoReporte/Reporte';
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
         <Route exact path="/CajaDeVenta">
          <CajaDeVenta/>
        </Route>
         <Route exact path="/CierreDeCaja">
          <CierreDeCaja/>
        </Route>
         <Route exact path="/NuevoReporte">
          <NuevoReporte/>
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