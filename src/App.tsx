import react from "react";
import WebpackImg from "./webpack5.jpg";
import Logo from "./reactjs.svg";
import { ClickCounter } from "./ClickCounter";
import "./styles.css";

export const App = () => {
  return (
    <div>
      <h1>Boiler Plate code - React with Typescript</h1>

      <h2>
        Current Mode - {process.env.NODE_ENV} {process.env.name}
      </h2>
      <div className="img-container">
        <img src={WebpackImg} />
        <img src={Logo} />
      </div>
      <ClickCounter />
    </div>
  );
};
