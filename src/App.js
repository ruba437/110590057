import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Sidebar from "./components/sidebar"
import Main from "./components/main"

function App() {
  return (
    <div className="App">
      <Title />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
