import "./App.css";
import { Provider } from "react-redux";
import { store } from "./modules/store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>App</h1>
      </div>
    </Provider>
  );
}

export default App;
