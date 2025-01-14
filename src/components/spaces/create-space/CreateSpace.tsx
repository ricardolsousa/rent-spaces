import { useState } from "react";
import CreateSpaceDialog from "./create-space-dialog/CreateSpaceDialog";

const CreateSpace = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-content justify-center rounded-md bg-blue-600 py-2 px-3 text-sm font-semibold text-white shadow-sm"
      >
        Add space
      </button>
      {open && <CreateSpaceDialog />}
    </>
  );
};

export default CreateSpace;
