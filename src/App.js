import './App.css';
import {Input} from "./components/input/Input";
import {Card} from "./components/card/Card";

function App() {
    const cityList =['New York', 'London', 'Moscow']
  return (
    <div className="Main">
      <Input/>
      <div className="CardList">
          {
              cityList.map(city => <Card key={city} city={city}/> )
          }
      </div>
    </div>
  );
}

export default App;
