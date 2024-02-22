import "./Input.css";

export default function Input(props) {
  
  return (
    <div className='input'>
      <label>{props.label}</label>
      <input required={props.require} placeholder={props.placeholder}/>
    </div>
  );
}
