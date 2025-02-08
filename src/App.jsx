import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);


  useEffect(() => {
    const isWelcomeShown = sessionStorage.getItem("welcomeShown");

    if (!isWelcomeShown) {
      setShowWelcome(true);
      setTimeout(() => {
        sessionStorage.setItem("welcomeShown", "true");
        setShowWelcome(false);
      }, 3000);
    }
  }, []);

  return (
    <div className="app-container">
      {showWelcome ? (
        <WelcomePage />
      ) : (
        <>
         <Provider store={store}>
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </Provider>


          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
