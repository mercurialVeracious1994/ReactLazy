import {Suspense, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Spinner from "./components/spinner/Spinner";
import {LazyRouteForArticles, LazyRouteForBooks, LazyRouteForProducts} from "./utility/lazyRoutes";
import {prefetchThirdPartyFiles} from "./utility/prefetchThirdPartyFiles";

function App() {
  useEffect(() => {
      LazyRouteForBooks.preload();
      prefetchThirdPartyFiles({href:"https://code.jquery.com/jquery-3.7.1.min.js",as:"script",rel:"prefetch"})
  }, []);


  return (
      <div className="App">
        <BrowserRouter>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home/>}
                    >
                        <Route path="/books" element={<LazyRouteForBooks/>} />
                        <Route path="/Products" element={<LazyRouteForProducts/>} />
                        <Route path="/articles" element={<LazyRouteForArticles/>} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
      </div>
  );
}

export default App;
