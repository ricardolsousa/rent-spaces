import { useSelector } from "react-redux";
import CreateSpace from "../../create-space/CreateSpace";
import { AuthenticationStateProps } from "../../../../types/authentication/AuthenticationTypes";

const SpaceListActions = () => {
  const userDetails = useSelector(
    (state: AuthenticationStateProps) => state.auth.userDetails
  );

  return (
    <div className="w-full flex justify-end mb-4 gap-2">
      {userDetails?.userType === "owner" && <CreateSpace />}
    </div>
  );
};

export default SpaceListActions;
