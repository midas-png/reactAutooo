import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";
import MainPage from "./pages/MainPage";
import CoinStats from "./pages/CoinStats";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="container">
            <WatchListContextProvider>
                <BrowserRouter>
                    <Header />
                    <Route exact path="/reactAutooo" component={MainPage} />
                    <Route
                        path="/reactAutooo/:id" component={CoinStats}
                    />
                    <Footer />
                </BrowserRouter>
            </WatchListContextProvider>
        </div>
    );
};

export default App;
