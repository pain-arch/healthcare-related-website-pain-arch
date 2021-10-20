import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service/Service';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
        <Router>
        <Header></Header>
        <div>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/about-us">
                <AboutUs></AboutUs>
            </Route>
            <Route path="/services">
                <Services></Services>
            </Route>
            <PrivateRoute path="/features">
                <Features></Features>
            </PrivateRoute>
            <PrivateRoute path="/blogs">
                <Blog></Blog>
            </PrivateRoute>
            <PrivateRoute path="/service/:name">
                <Service></Service>
            </PrivateRoute>
            <Route path="/register">
                <Register></Register>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route> 
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
