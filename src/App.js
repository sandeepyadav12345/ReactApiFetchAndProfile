
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserDetails from "./pages/profile/components/UserDetails";
import FetchImages from "./pages/imagesapi/components/FetchImages";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          
          <Route path="/" element={<FetchImages />} />
          <Route path="/userprofile" element={<UserDetails />} />
        
    
      </Routes>
    </BrowserRouter>
  );
}

 