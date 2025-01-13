type SpaceCardProps = {
  space: any;
};

const SpaceCard = ({ space }: SpaceCardProps) => {
  return (
    <div className="rounded bg-white h-72 w-full flex flex-col">
      <img
        src="images/spaces.webp"
        alt=""
        className="w-full object-cover"
        style={{ height: "200px" }}
      />
      <div className="flex flex-col flex-auto p-2">
        <div className="flex flex-col flex-auto">
          <h3 className="font-bold text-base text-neutral-950">
            The Editory Garden Porto Hotel
          </h3>
          <span className="text-xs text-gray-500">Porto, Portugal</span>
        </div>
        <div className="flex flex-auto items-center gap-2">
          <div className="text-xs rounded bg-blue-900 flex items-center justify-center px-0.5 py-1 text-white">
            9.0
          </div>
          <span className="text-xs text-neutral-950">Soberbo</span>
          <span className="text-xs text-gray-500">926 comentários</span>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
