import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  DocumentTextIcon,
  CursorArrowRaysIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "About Us",
    href: "/about",
    icon: DocumentTextIcon,
  },
  {
    name: "Facilities",
    href: "/facility",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: PhotoIcon,
  },
];

export default function Flyout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(solutions[0].name);

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
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-bold leading-6 lg:text-white text-Primary ">
        <span>{selectedItem}</span>
        {isPanelOpen ? (
          <ChevronUpIcon className="h-5 w-5 " aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        )}
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-[20rem] max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white opacity-90 text-sm leading-6 shadow-lg  ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-5 rounded-xl p-4 hover:bg-orange-100  "
                >
                  <div className=" flex h-11 w-11 flex-none items-center justify-center  rounded-full bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-orange-500"
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
