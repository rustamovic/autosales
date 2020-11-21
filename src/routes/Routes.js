import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./Loader/Loading";
import { Footer } from "../Containers/Footer/footer";
import Header from "../Containers/Header/header";
import ProtectedRoute from "./ProtectedRoute";
const Home = lazy(() => import("../Components/Home/Home"));
const FAQ = lazy(() => import("../Components/FAQ/FAQ"));
const Login = lazy(() => import("../Components/Login/Login"));
const WhoWeAre = lazy(() => import("../Components/About/WhoWe/top"));
const NotFound = lazy(() => import("../Components/NotFound"));
const Buy = lazy(() => import("../Components/ButCar/BuyCar"));
const Contact = lazy(() => import("../Components/Contact/Contact"));
const Terms = lazy(() => import("../Components/Conditions/TermsOfService"));
const Policy = lazy(() => import("../Components/Conditions/PrivacyPolicy"));
const Stepper = lazy(() => import("../Components/Home/SendFunc/stepper/main"));
const Form = lazy(() =>
  import("../Components/Home/SendFunc/FormAfterRegister/form")
);
const History = lazy(() => import("../Components/History/Components"));
const FullHistory = lazy(() => import("../Components/History/FullC"));
// const MapMine = lazy(() => import("../Components/MapMine"));

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <Header />
              <Loader />
            </>
          }
        >
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={WhoWeAre} />
            <Route exact path="/sell" component={Buy} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/termsofservice" component={Terms} />
            <Route exact path="/privacyvspolicy" component={Policy} />
            <Route exact path="/stepper" component={Stepper} />
            <ProtectedRoute exact path="/form" component={Form} />
            <ProtectedRoute exact path="/history" component={History} />
            <ProtectedRoute exact path="/Fullhistory/:id" component={FullHistory} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default React.memo(Routes);

// <Route exact path="/map" component={MapMine} />
