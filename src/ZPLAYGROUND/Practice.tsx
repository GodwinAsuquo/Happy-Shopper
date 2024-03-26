import useToggle from "./usetoggle";

const Practice = () => {
  const { show, toggle } = useToggle(true);
  return (
    <>
      <div>This is toggle practice</div>
      <button onClick={toggle} className="bg-yellow-800">
        toggle this bitch
      </button>
      {show && <p className="font-extrabold ">the toggled one</p>}
    </>
  );
};
export default Practice;
