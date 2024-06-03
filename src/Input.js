export default function Input(props) {
  return (
    <>
      <label>{props.label + " : "}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
      <br />
      <br />
    </>
  );
}
