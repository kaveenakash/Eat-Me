import { Routes, Route } from "react-router-dom";

// components
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
