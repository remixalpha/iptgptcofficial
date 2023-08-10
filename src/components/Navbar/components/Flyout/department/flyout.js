import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  CpuChipIcon,
  ComputerDesktopIcon,
  FingerPrintIcon,
  BeakerIcon,
  CogIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Electronics Engineering",
    href: "/electronics",
    icon: CpuChipIcon,
  },
  {
    name: "Computer Engineering",
    href: "/computer",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Printing Technology",
    href: "/printing",
    icon: FingerPrintIcon,
  },
  {
    name: "General Department",
    href: "/general",
    icon: BeakerIcon,
  },
  {
    name: "Mechanical Engineering Workshop",
    href: "/mechanical",
    icon: CogIcon,
  },
  {
    name: "Office",
    href: "/office",
    icon: SwatchIcon,
  },
];

export default function Flyout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Department");

  const handleMouseEnter = () => {
    setIsPanelOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPanelOpen(false);
  };
  const handleItemClick = (name) => {
    setSelectedItem(name);
  };
  return (
    <Popover
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Popover.Button className="inline-flex  items-center gap-x-1 text-sm font-bold leading-6 xl:text-white text-Primary ">
        <span className="">{selectedItem}</span>
        {isPanelOpen ? (
          <ChevronUpIcon className="h-5 w-5 " aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        )}{" "}
      </Popover.Button>

      <Transition
        show={isPanelOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-[25rem] max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg  ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-2 rounded-lg p-4 hover:bg-gray-50 "
                  onClick={() => handleItemClick(item.name)}
                >
                  <div className=" flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="pt-2">
                    <a
                      href={item.href}
                      className="font-semibold text-gray-900 "
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
