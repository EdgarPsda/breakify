import "./App.css";
import DisplayResults from "./components/displayResults";
import Form from "./components/form";

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-300 mb-2">
        Welcome to Breakify
      </h1>
      <DisplayResults></DisplayResults>
      <Form></Form>
    </div>
  );
}

export default App;
