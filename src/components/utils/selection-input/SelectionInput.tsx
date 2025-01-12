import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

type SelectionInputProps = {
  label: string;
  value: any;
  setValue: (value: any) => void;
  options: any[];
};

const SelectionInput = ({
  label,
  value,
  setValue,
  options,
}: SelectionInputProps) => {
  return (
    <Listbox value={value} onChange={(e: any) => setValue(e)}>
      <label htmlFor="status">{label}</label>
      <div className="relative">
        <ListboxButton
          className="grid w-full cursor-default rounded border border-gray-300 py-1 px-2 text-left"
          style={{ minHeight: "34px" }}
        >
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="block truncate">
              {options.find((option) => option.value === value)?.label}
            </span>
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-50 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option.value}
              className="group relative cursor-default select-none py-1 px-2 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {option.label}
                </span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default SelectionInput;
