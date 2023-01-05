import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";import App from "./App";
import " store 
 from './store'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Ap
    <Provider store={store}>
        <App />        
    </Povider>p />);
