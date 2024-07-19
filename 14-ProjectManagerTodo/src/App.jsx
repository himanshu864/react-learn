import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="max-w-3xl flex-1 p-8">
        <h1 className="mb-8 text-center text-5xl font-bold">Project Manager</h1>
        <Todo />
      </main>
    </div>
  );
}

export default App;
