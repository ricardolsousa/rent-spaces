import { useState } from "react";
import SpaceFavorite from "../space-favorite/SpaceFavorite";
import { Link } from "react-router";

type SpaceCardProps = {
  space: any;
};

const SpaceCard = ({ space }: SpaceCardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    space?.isFavorite || false
  );

  return (
    <div className="relative rounded bg-white h-72 w-full flex flex-col">
      <SpaceFavorite
        spaceId={space.id}
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
      />
      <Link to={`/spaces/${space.id}`}>
        <img
          src="/images/spaces.webp"
          alt=""
          className="w-full object-cover"
          style={{ height: "200px" }}
        />
        <div className="flex flex-col flex-auto p-2">
          <div className="flex flex-col flex-auto">
            <h3 className="font-bold text-base text-neutral-950">
              {space.title}
            </h3>
            <span className="text-xs text-gray-500">{space.address}</span>
          </div>
          <div className="flex flex-auto items-center gap-2">
            <div className="text-xs rounded bg-blue-900 flex items-center justify-center px-0.5 py-1 text-white">
              9.0
            </div>
            <span className="text-xs text-neutral-950">Soberbo</span>
            <span className="text-xs text-gray-500">926 comentários</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SpaceCard;
