import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { useSpaceActions } from "../../hooks/useSpaceActions";

type SpaceFormProps = {
  selectedSpace?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SpaceForm = ({ selectedSpace, setOpen }: SpaceFormProps) => {
  const loggedUser = useSelector((state: any) => state.auth.userId);
  const { handleCreateSpace } = useSpaceActions();

  const [space, setSpace] = useState<any>(
    selectedSpace || {
      ownerId: loggedUser,
      title: "",
      pricePerHour: 0,
      address: "",
    }
  );

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          className="rounded border border-gray-300 px-2 py-1"
          type="text"
          name="title"
          id="title"
          value={space.title}
          onChange={(e) => setSpace({ ...space, title: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="pricePerHour">Price per hour</label>
        <input
          className="rounded border border-gray-300 px-2 py-1"
          type="number"
          name="pricePerHour"
          id="pricePerHour"
          value={space.pricePerHour}
          onChange={(e) =>
            setSpace({ ...space, pricePerHour: parseFloat(e.target.value) })
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="address">Address</label>
        <input
          className="rounded border border-gray-300 px-2 py-1"
          type="text"
          name="address"
          id="address"
          value={space.address}
          onChange={(e) => setSpace({ ...space, address: e.target.value })}
        />
      </div>
      <div className="w-full flex justify-center gap-4 px-4 pt-4">
        <button
          type="button"
          onClick={() => {
            setOpen(false);
          }}
          className="inline-flex w-full justify-center rounded-md bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 py-2 px-3 text-sm font-semibold shadow-sm sm:w-auto"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={async () => {
            // if (selectedSpace) {
            //   await handleUpdatespace(loggedUser, space);
            // } else {
            await handleCreateSpace(space);
            // }
            setOpen(false);
          }}
          className="inline-flex w-full justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm sm:w-auto"
        >
          {selectedSpace ? "Update space" : "Create space"}
        </button>
      </div>
    </div>
  );
};

export default SpaceForm;
