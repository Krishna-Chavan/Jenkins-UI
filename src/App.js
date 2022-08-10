import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import AddParameters from './components/AddParameters';
import ParameterList from './components/ParameterList';
import Addbuildstep from './components/Addbuildstep';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Release from './components/Release';
import AddProject from './components/projects/AddProject';
import Project from './components/projects/Project';

function App() {
  return (
    <BrowserRouter>
      {/* <Router> */}
        <Header />
        <Routes>
          <Route  path="/projectbuilds" element={<Content />} />
          <Route  path="/parameter" element={<ParameterList />} />
          <Route  path="/addparameter" element={<AddParameters />} />
          <Route  path="/addbuildstep" element={<Addbuildstep />} />
          <Route  path="/release" element={<Release />} />
          <Route  path="/addProject" element={<AddProject />} />
          <Route  path="/" element={<Project />} />
        </Routes>
      {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
