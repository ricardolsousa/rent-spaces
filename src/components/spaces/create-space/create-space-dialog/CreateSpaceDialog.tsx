import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import SpaceForm from "../space-form/SpaceForm";

type CreateSpaceDialogProps = {
  selectedSpace?: any;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const CreateSpaceDialog = ({
  selectedSpace,
  open,
  setOpen,
}: CreateSpaceDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <SpaceForm setOpen={setOpen} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateSpaceDialog;
