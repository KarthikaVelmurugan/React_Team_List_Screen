import logo from "./logo.svg";
import "./App.css";
import MainList from "./Main/MainList";

function App() {
  return (
    <div className="bg-gray-700 h-screen flex items-center justify-center">
      <div className="bg-blue-50 w-10/12 overflow-hidden rounded-xl shadow-sm shadow-slate-50">
        <MainList></MainList>
      </div>
    </div>
  );
}

export default App;
