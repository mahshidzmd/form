import JsonDataDisplay from './my/JsonDataDisplay'
import './App.css';
import SendData from './my/sendData';

function App() {
  return (
    <div className="App">
      <SendData/>
      <JsonDataDisplay/>
    </div>
  );
}

export default App;
