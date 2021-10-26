//import "./style/Dot.css";

export default function Dot({ color }) {
  const style = {
    height: 25,
    width: 25,
    margin: "0 1rem",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block"
  };
    return <span style={style}></span>;
  }