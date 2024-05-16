import "./app.css";
import Menu from "./menu";
import Header from "./header";
import BodyPanel from "./body-panel";
import Footer from "./footer";

export default function App() {
  return (
    <div className="app">
      <Menu />
      <div className="app-container">
        <Header />
        <BodyPanel />
      </div>
      <Footer />
    </div>
  );
}
