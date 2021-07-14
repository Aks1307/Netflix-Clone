import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-css";
import { FirebaseContext } from "./context/firebase";
import { App } from "./app";
import { seedDatabase } from "./seed";

var firebaseConfig = {
  apiKey: "AIzaSyAH73Lpz4C-wo5NMM-FqitBDMrQNBVI_7k",
  authDomain: "netflix-clone-5c7d1.firebaseapp.com",
  projectId: "netflix-clone-5c7d1",
  storageBucket: "netflix-clone-5c7d1.appspot.com",
  messagingSenderId: "960035931949",
  appId: "1:960035931949:web:4a2edd6909f9712575b5a4",
};

const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
