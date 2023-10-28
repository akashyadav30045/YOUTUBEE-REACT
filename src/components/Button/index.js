const Button = ({name}) => {
  return (
    <div>
      <button className="px-4 py-2 m-1 hover:text-white bg-gray-200 hover:bg-gray-900 rounded-lg">{name}</button>
    </div>
  );
};
export default Button;
