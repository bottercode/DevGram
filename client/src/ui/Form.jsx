const Form = (props) => {
  return (
    <form
      className="border-[1px] border-black w-[350px] p-6 rounded-lg"
      onSubmit={props.onSubmit}
    >
      <h1 className="text-2xl mb-12">Pro-Gram</h1>
      {props.children}
    </form>
  );
};
export default Form;
