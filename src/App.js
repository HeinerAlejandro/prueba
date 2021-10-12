import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Calendar from "./components/TaskOrganized/Calendar"
import BoxInput from "./components/TaskOrganized/BoxInput";

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar />
      <BoxInput />

    </div>
  );
}

export default App;
