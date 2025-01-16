import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../../types/authentication/AuthenticationTypes";
import { getFavoriteSpaces } from "../../../services/space/SpaceService";
import SpaceCard from "../space-card/SpaceCard";

const SpaceFavoriteList = () => {
  const loggedUserDetails = useSelector(
    (state: AuthenticationStateProps) => state.auth.userDetails
  );
  const [myFavoriteSpaces, setMyFavoriteSpaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleGetFavoriteSpaces = async () => {
      setLoading(true);
      try {
        const spaces = await getFavoriteSpaces(
          loggedUserDetails.favoriteSpaces || []
        );

        if (spaces.length) {
          setMyFavoriteSpaces((prevSpaces) => [...prevSpaces, ...spaces]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    handleGetFavoriteSpaces();
  }, [setMyFavoriteSpaces, loggedUserDetails]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {myFavoriteSpaces.length ? (
        <div className="grid grid-cols-4 gap-4">
          {myFavoriteSpaces.map((space) => (
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
