import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100">
      <Todos />
      <Todos />
    </div>
  );
}

export default App;
