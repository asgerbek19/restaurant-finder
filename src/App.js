import "./css/style.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ResultsPage from "./pages/ResultsPage";
import PreferencePage from "./pages/PreferencePage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { usersRef } from "./firebase-config";

function App() {
   const auth = getAuth();
   onAuthStateChanged(auth, (user) => {
      if (user) {
         //User is signed in
      } else {
         //User signed out
      }
   });
   return (
      //<Nav/>
      <>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preferencer" element={<PreferencePage />} />
            <Route path="/resultater" element={<ResultsPage />} />
            <Route path="/log-ind" element={<SignInPage />} />
            <Route path="/opret-bruger" element={<SignUpPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
         </Routes>
      </>
   );
}

export default App;
