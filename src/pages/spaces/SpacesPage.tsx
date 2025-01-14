import { SpaceProvider } from "../../components/spaces/context/SpaceContext";
import SpaceListActions from "../../components/spaces/space-list/space-list-actions/SpaceListActions";
import SpaceList from "../../components/spaces/space-list/SpaceList";

const SpacesPage = () => {
  return (
    <div className="py-4 px-48">
      <SpaceProvider>
        <SpaceListActions />
        <SpaceList />
      </SpaceProvider>
    </div>
  );
};
export default SpacesPage;
