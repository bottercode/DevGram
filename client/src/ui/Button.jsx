const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className="block font-semibold text-sm border-2 border-blue-600 px-2 py-1 hover:bg-blue-600 hover:text-white transition-all duration-200 ease-in-out text-blue-600"
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
