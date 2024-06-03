import Error from "./Error";

export default function RadioButton({
  label,
  value,
  list,
  errorMessage,
  ...rest
}) {
  return (
    <>
      {label && <label>{label + " :"}</label>}
      {list.map((item, index) => {
        return (
          <span key={index}>
            <input
              type="radio"
              value={item}
              checked={value === item}
              {...rest}
              style={{ margin: 5 }}
            />
            {item}
          </span>
        );
      })}
      {errorMessage && <Error errorMessage={errorMessage} />}
      <br />
    </>
  );
}
