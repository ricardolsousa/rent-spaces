import { useEffect } from "react";
import SpaceCard from "../space-card/SpaceCard";
import { useSpaceContext } from "../context/SpaceContext";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../../types/authentication/AuthenticationTypes";
import { useSpaces } from "../hooks/useSpaces";

const SpaceList = () => {
  const loggedUser = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );
  const { spaces: contextSpaces, setSpaces: setContextSpaces } =
    useSpaceContext();

  const { spaces, loading } = useSpaces({
    userId: loggedUser,
    pageType: "all",
  });

  // Atualiza o contexto sempre que os espaços mudarem
  useEffect(() => {
    if (spaces) {
      setContextSpaces(spaces);
    }
  }, [spaces, setContextSpaces]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {contextSpaces.length ? (
        <div className="grid grid-cols-4 gap-4">
          {contextSpaces.map((space) => (
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
