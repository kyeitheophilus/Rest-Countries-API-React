import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
   const [isDarkMode, setIsDarkMode] = useState(
     // getting user's previous choice from localstorage
     localStorage.getItem("darkMode") === "true"
   );

   useEffect(() => {
     // add and remove dark-theme class

     isDarkMode
       ? document.body.classList.add("dark-theme")
       : document.body.classList.remove("dark-theme");

     // saving current preference to local storage
     localStorage.setItem("darkMode", isDarkMode);
   }, [isDarkMode]);

   const light = "Light Mode";
const dark = "Dark Mode";

return (
  <div className="header">
    <h1>Where in the world?</h1>
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? (
        <>
          <FaMoon /> {dark}
        </>
      ) : (
        <>
          <FaSun /> {light}
        </>
      )}
    </button>
  </div>
);
      }
export default Header