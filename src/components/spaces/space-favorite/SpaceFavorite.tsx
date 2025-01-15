import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "../../../types/authentication/AuthenticationTypes";
import {
  addSpaceToFavorites,
  removeSpaceFromFavorites,
} from "../../../services/space/SpaceService";

type SpaceFavoriteProps = {
  spaceId: string;
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
};

const SpaceFavorite = ({
  spaceId,
  isFavorite,
  setIsFavorite,
}: SpaceFavoriteProps) => {
  const loggedUser = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );

  const toggleFavoriteSpace = async () => {
    if (isFavorite) {
      await removeSpaceFromFavorites(spaceId, loggedUser);
    } else {
      await addSpaceToFavorites(spaceId, loggedUser);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="absolute right-2 top-2">
      <div
        className="rounded-full bg-white p-2 cursor-pointer"
        onClick={async () => await toggleFavoriteSpace()}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  );
};

export default SpaceFavorite;
