import { useState } from "react";
import initialData from "./utils/data";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Projecter from "./components/Projecter";

function App() {
  const [data, setData] = useState(initialData);
  const [active, setActive] = useState(-1); // active is basically the index of data which is currently active

  const handleActive = (index) => setActive(index);
  const handleDataUpdate = (newData) => setData(newData);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar data={data} active={active} onSelect={handleActive} />
      <main className="max-w-3xl flex-1 p-8">
        {active === -1 ? (
          <Projecter data={data} onDataUpdate={handleDataUpdate} />
        ) : (
          <Main
            data={data}
            onDataUpdate={handleDataUpdate}
            active={active}
            handleActive={handleActive}
          />
        )}
      </main>
    </div>
  );
}

export default App;
