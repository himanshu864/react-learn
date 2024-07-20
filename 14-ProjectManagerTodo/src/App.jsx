import { useState } from "react";
import initialData from "./utils/data";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";
import Projecter from "./components/Projecter";

function App() {
  const [data, setData] = useState(initialData);
  const [active, setActive] = useState(-1);

  const handleActivity = (i) => {
    setActive(i);
  };

  const handleDataUpdate = (newData) => {
    setData(newData);
    setActive(-1);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar data={data} active={active} onSelect={handleActivity} />
      <main className="max-w-3xl flex-1 p-8">
        <h1 className="mb-8 text-center text-5xl font-bold">Project Manager</h1>
        {active === -1 ? (
          <Projecter data={data} onDataUpdate={handleDataUpdate} />
        ) : (
          <Todo data={data} onDataUpdate={handleDataUpdate} active={active} />
        )}
      </main>
    </div>
  );
}

export default App;
