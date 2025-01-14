import { useDispatch } from "react-redux";
import { register } from "../../../services/authentication/AuthenticationService";
import { loginReducer } from "../../../store/auth/authSlice";
import { useNavigate } from "react-router";
import { useState } from "react";
import SelectionInput from "../../utils/selection-input/SelectionInput";

const userTypeList = [
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "Renter",
    value: "renter",
  },
];

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userType, setUserType] = useState<"owner" | "renter">("owner");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      const user = await register(email, password, userType);

      if (user) {
        dispatch(
          loginReducer({
            email: user.email,
            userId: user.uid,
          })
        );
        navigate("/");
      }
    } catch (e) {
      throw e;
    }
  };
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          className="p-1"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input
          className="p-1"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SelectionInput
          label="Type"
          value={userType}
          setValue={(option: "owner" | "renter") => setUserType(option)}
          options={userTypeList}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={async () => await handleRegister()}
          className="inline-flex w-full justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
