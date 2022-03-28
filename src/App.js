import "./css/style.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import FavoritedPage from "./pages/FavoritedPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ResultsPage from "./pages/ResultsPage";
import PreferencePage from "./pages/PreferencePage";
import BestRatedPage from "./pages/BestRatedPage";
import RestaurantPage from "./pages/RestaurantPage";
import AboutPage from "./pages/AboutPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { usersRef } from "./firebase-config";
import { useState } from "react";



function App() {
   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
   const auth = getAuth();
  
   onAuthStateChanged(auth, (user) => {
      if (user) {
         setIsAuth(true);
         localStorage.setItem("isAuth", true);
      } else {
         setIsAuth(false);
         localStorage.removeItem("isAuth");
      }
   });

   // variable holding all private routes including the nav bar
   const privateRoutes = (
      <div>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/praeferencer" element={<PreferencePage />} />
            <Route path="/resultater" element={<ResultsPage />} />
            <Route path="/gemte" element={<FavoritedPage/>}/>
            <Route path="/bedst-bedoemte" element={<BestRatedPage/>}/>
            <Route path="/restaurant/:slug" element={<RestaurantPage/>}/>
            <Route path="/om-os" element={<AboutPage />}/>
            <Route path="*" element={<Navigate to="/" />} />
         </Routes>
         <Nav />
      </div>
   );
   // variable holding all public routes without nav bar
   const publicRoutes = (
      <>
         <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/log-ind" element={<SignInPage />} />
            <Route path="/opret-bruger" element={<SignUpPage />} />
            <Route path="/om-os" element={<AboutPage />}/>
            <Route path="*" element={<Navigate to="log-ind" />} />
         </Routes>
      </>
   );
   return <main>{isAuth ? privateRoutes : publicRoutes}</main>;
}

export default App;
