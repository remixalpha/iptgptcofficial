import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  DocumentTextIcon,
  CursorArrowRaysIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const Items = [
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
  const [selectedItem, setSelectedItem] = useState(Items[0].name);

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
      <Popover.Button className="inline-flex items-center text-sm font-bold leading-6 gap-x-1 lg:text-white text-Primary ">
        <span>{selectedItem}</span>
        {isPanelOpen ? (
          <ChevronUpIcon className="w-5 h-5 " aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
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
          <div className="flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl opacity-90 ring-gray-900/5">
            <div className="p-4">
              {Items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative flex p-4 group gap-x-5 rounded-xl hover:bg-orange-100 "
                >
                  <div className="flex items-center justify-center flex-none bg-white rounded-full h-11 w-11">
                    <item.icon
                      className="w-6 h-6 text-gray-600 group-hover:text-orange-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="pt-2">
                    <a className="font-semibold text-gray-900 ">{item.name}</a>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
