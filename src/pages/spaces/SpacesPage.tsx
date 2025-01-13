import SpaceCard from "../../components/spaces/space-card/SpaceCard";

const SpacesPage = () => {
  return (
    <div className="py-4 px-48">
      <div className="grid grid-cols-4 gap-4">
        <SpaceCard space={null} />
        <SpaceCard space={null} />
        <SpaceCard space={null} />
        <SpaceCard space={null} />
        <SpaceCard space={null} />
        <SpaceCard space={null} />
        <SpaceCard space={null} />
      </div>
    </div>
  );
};
export default SpacesPage;
