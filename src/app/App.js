import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="app-wrapper flex-column">
      <canvas id="my-canvas"></canvas>
      <div className="content flex-column">
        <main>
          <Form />
        </main>
      </div>
    </div>
  );
}

export default App;
