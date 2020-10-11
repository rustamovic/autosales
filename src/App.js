import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import Loading from "./Loading/Loading";
import Header from "./Containers/Header/header";
import { Footer } from "./Containers/Footer/footer";
import Home from "./Components/Home/Home";
import FAQ from "./Components/FAQ/FAQ";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound";
import WhoWeAre from "./Components/About/WhoWe/top";
import Buy from "./Components/ButCar/BuyCar";
import "tailwindcss/dist/base.css";
const App = () => {
  // const [isLoaded, setIsLoaded] = React.useState(true);
  // setTimeout(() => {
  //   setIsLoaded(false);
  // }, 8000);
  return (
    <div className="App">
      {/* {isLoaded ? (
        <Loading />
      ) : ( */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={WhoWeAre} />
          <Route exact path="/sell" component={Buy} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
      {/* )} */}
    </div>
  );
};
export default App;
