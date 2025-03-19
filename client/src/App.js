import { Routes, Route} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Projects from "./components/Projects"; 

function App() {
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Projects></Projects>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
    </>
  );
}

export default App;
