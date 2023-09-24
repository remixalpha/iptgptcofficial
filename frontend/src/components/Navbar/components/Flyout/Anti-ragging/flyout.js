import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { DocumentMinusIcon } from "@heroicons/react/24/outline";
import Anti from "../../../../../assets/images/logos/antiragging.png";

const solutions = [
  {
    name: "Anti Ragging",
    href: "https://antiragging.in/",
    icon: Anti,
  },
  {
    name: "Undertaking",
    href: "https://drive.google.com/file/d/1hUEjdxVmhCZzawMes6pQP2vAKPedEa6h/view",
    icon: DocumentMinusIcon,
  },
];

export default function Flyout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsPanelOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPanelOpen(false);
  };
  return (
    <Popover
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Popover.Button className="inline-flex items-center gap-x-1  text-sm font-bold leading-6 lg:text-white text-Primary ">
        <span>Anti Ragging</span>
        {isPanelOpen ? (
          <ChevronUpIcon className="h-5 w-5 " aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        )}
      </Popover.Button>

      <Transition
        show={isPanelOpen}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-[16rem] max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white opacity-90 text-sm leading-6 shadow-lg  ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-5 rounded-xl p-4 hover:bg-orange-100  "
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 object-cover"
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
