import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../../types/authentication/AuthenticationTypes";
import SpaceCard from "../space-card/SpaceCard";
import { useSpaces } from "../hooks/useSpaces";

const SpaceFavoriteList = () => {
  const loggedUser = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );

  const { spaces, loading } = useSpaces({
    userId: loggedUser,
    pageType: "favorites",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {spaces.length ? (
        <div className="grid grid-cols-4 gap-4">
          {spaces.map((space) => (
            <SpaceCard space={space} />
          ))}
        </div>
      ) : (
        <div>No spaces found</div>
      )}
    </>
  );
};

export default SpaceFavoriteList;
