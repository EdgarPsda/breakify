import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../slices/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const handleFirstNameChange = (e) => {
    dispatch(setFirstName(e.target.value));
  };

  const handleLastNameChange = (e) => {
    dispatch(setLastName(e.target.value));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col m-2">
        <label htmlFor="firstName" className="font-bold text-gray-300 flex">
          First Name
        </label>
        <input
          className="bg-gray-300 rounded outline-none"
          id="firstName"
          type="text"
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="flex flex-col m-2">
        <label className="font-bold text-gray-300 flex" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="bg-gray-300 rounded outline-none"
          id="lastName"
          type="text"
          onChange={handleLastNameChange}
        />
      </div>
    </div>
  );
};

export default Form;
