import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router";
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
      <Link to={"/spaces"}>
        <h1 className="text-3xl font-bold text-white">Rent Spaces</h1>
      </Link>
      {isAuthenticated ? (
        <div className="flex gap-10">
          <div className="flex gap-2">
            <Link
              to={"/my-spaces"}
              className="inline-flex w-fit justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm"
            >
              My spaces
            </Link>
            <Link
              to={"/my-favorite-spaces"}
              className="inline-flex w-fit justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm"
            >
              Favorites
            </Link>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex w-fit justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleLogin}
          className="inline-flex w-fit justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
