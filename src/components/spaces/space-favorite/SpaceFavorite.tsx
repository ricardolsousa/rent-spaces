import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const SpaceFavorite = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <div className="absolute right-2 top-2">
      <div
        className="rounded-full bg-white p-2 cursor-pointer"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  );
};

export default SpaceFavorite;
