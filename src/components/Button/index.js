import "./Button.css";

export default function Button(props) {
  return (
    <div className="container">
      <button className="button">{props.children}</button>
    </div>
  );
}
