import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World </h1>
        <Weather city="Tokyo" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
