import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router";
import { logoutReducer } from "../../store/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: { auth: { userId: string } }) => state.auth.userId
  );

  const handleLogout = () => {
    try {
      signOut(auth)
        .then(() => {
          dispatch(logoutReducer());
          navigate("/login");
        })
        .catch((error) => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="h-16 flex fixed w-full z-10 items-center justify-between px-12 py-2 bg-gray-600">
      <h1 className="text-3xl font-bold text-white">
        Firebase Project Template
      </h1>
      {isAuthenticated ? (
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex w-full justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm mr-3 sm:w-auto"
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          onClick={handleLogin}
          className="inline-flex w-full justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm mr-3 sm:w-auto"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
