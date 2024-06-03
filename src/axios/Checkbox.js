import Error from "./Error";

export default function Checkbox({
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
              type="checkbox"
              value={item}
              checked={
                list?.length > 1 ? value?.includes(item) : value === true
              }
              {...rest}
              style={{ margin: 7 }}
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
