import { SpaceProvider } from "../../components/spaces/context/SpaceContext";
import SpaceList from "../../components/spaces/space-list/SpaceList";

const SpacesPage = () => {
  return (
    <div className="py-4 px-48">
      <SpaceProvider>
        <SpaceList />
      </SpaceProvider>
    </div>
  );
};
export default SpacesPage;
