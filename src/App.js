import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Parameter from './components/Parameter';
import AddParameters from './components/AddParameters';
import ParameterList from './components/ParameterList';
import Addbuildstep from './components/Addbuildstep';
import { BrowserRouter as Router,Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Header />
      <Content />
      <Parameter /> */}
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/parameter" component={ParameterList} />
            <Route exact path="/addparameter" component={AddParameters} />
            <Route exact path="/addbuildstep" component={Addbuildstep} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
