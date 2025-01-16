import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../../types/authentication/AuthenticationTypes";
import SpaceCard from "../space-card/SpaceCard";
import { getMySpaces } from "../../../services/space/SpaceService";

const SpaceFavoriteList = () => {
  const loggedUser = useSelector(
    (state: AuthenticationStateProps) => state.auth
  );
  const [mySpaces, setMySpaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleGetMySpaces = async () => {
      setLoading(true);
      try {
        const spaces = await getMySpaces(loggedUser.userId);

        const mySpaces = spaces.map((space) =>
          loggedUser.userDetails.favoriteSpaces.find(
            (fav: string) => fav === space.id
          )
            ? { ...space, isFavorite: true }
            : { ...space, isFavorite: false }
        );

        if (mySpaces.length) {
          setMySpaces(mySpaces);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    handleGetMySpaces();
  }, [setMySpaces, loggedUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {mySpaces.length ? (
        <div className="grid grid-cols-4 gap-4">
          {mySpaces.map((space) => (
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
