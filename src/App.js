import './App.css';
import {Input} from "./components/input/Input";
import {Card} from "./components/card/Card";

function App() {
  return (
    <div className="Main">
      <Input/>
      <div className="CardList">
        <Card/>
        <Card/>
        <Card/></div>
    </div>
  );
}

export default App;
