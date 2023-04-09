const Input = (props) => {
  return (
    <input
      className="focus:outline-offset-0 focus:outline-blue-400 w-full mb-6 py-[3px] px-2 border-[1px] border-black outline-none text-sm focus:border-blue-600"
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
    />
  );
};
export default Input;
