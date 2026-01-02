import Body from "./src/components/Body";
import Header from "./src/components/Header";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
