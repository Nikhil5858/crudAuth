import { Routes, Route} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Header from "./components/header";
import Projects from "./components/Projects"; 
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Projects></Projects>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/features" element={<Features></Features>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
    </>
  );
}

export default App;
