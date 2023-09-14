import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { PrimeReactProvider } from "primereact/api";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="container">
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Filter />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
