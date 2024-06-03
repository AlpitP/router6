import Error from "./Error";

const Select = ({ list, label, errorMessage, ...rest }) => {
  return (
    <>
      {label && <label>{label + " : "}</label>}
      <select {...rest} style={{ margin: 5 }}>
        {list.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
      {errorMessage && <Error errorMessage={errorMessage} />}
      <br />
    </>
  );
};
export default Select;
