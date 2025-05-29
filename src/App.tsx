
import "./App.css";
import Sidebar from "./components/Sidebar";
import AllTasks from "./pages/allTasks";

const App: React.FC= () =>{

  return (
      <div className="w-[100vw] h-[100vh] bg-gradient-to-t from-pink-300 to-pink-500 flex justify-center items-center bg-[]">
      <div className="flex w-4/5 h-4/5 bg-white rounded-2xl shadow-lg shadow-[rgb(59,51,51)] overflow-y-scroll">
        <Sidebar />
        <AllTasks />
      </div>
    </div>
  );
}

export default App;
