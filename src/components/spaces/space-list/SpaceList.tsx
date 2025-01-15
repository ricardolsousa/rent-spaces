import { useEffect, useState } from "react";
import SpaceCard from "../space-card/SpaceCard";
import { useSpaceContext } from "../context/SpaceContext";
import { getSpaces } from "../../../services/space/SpaceService";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../../types/authentication/AuthenticationTypes";

const SpaceList = () => {
  const loggedUserDetails = useSelector(
    (state: AuthenticationStateProps) => state.auth.userDetails
  );
  const { spaces, setSpaces } = useSpaceContext();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleGetSpaces = async () => {
      setLoading(true);
      try {
        const spaces = await getSpaces(loggedUserDetails.favoriteSpaces);

        if (spaces.length) {
          setSpaces((prevSpaces) => [...prevSpaces, ...spaces]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    handleGetSpaces();
  }, [setSpaces, loggedUserDetails]);

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

export default SpaceList;
