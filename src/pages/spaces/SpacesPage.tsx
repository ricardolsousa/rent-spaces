import { SpaceProvider } from "../../components/spaces/context/SpaceContext";
import CreateSpace from "../../components/spaces/create-space/CreateSpace";
import SpaceList from "../../components/spaces/space-list/SpaceList";

const SpacesPage = () => {
  return (
    <div className="py-4 px-48">
      <SpaceProvider>
        <CreateSpace />
        <SpaceList />
      </SpaceProvider>
    </div>
  );
};
export default SpacesPage;
