import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Files = [
  {
    Title: "EOA 2021-22",

    href: "https://drive.google.com/file/d/1mM4mkTx9A1Z_Ml0XJVC3IcbRr-sBTP-r/view",
  },
  {
    Title: "EOA 2020-21",

    href: "https://drive.google.com/file/d/1nNkbNkQP7lZIflcQpZF87HX414DBlUfT/view",
  },

  {
    Title: "EOA 2019-20",

    href: "https://drive.google.com/file/d/1wd5Qyai09EL2ISyh8eEwAC9a58mSvmuG/view",
  },
  {
    Title: "EOA 2018-19",

    href: "https://drive.google.com/file/d/1pEhqre3otZrEf-5l2CAodAQkf-auZ-zh/view",
  },
  {
    Title: "EOA-AY 2018-19 FORMAT-20-REDUCTION",

    href: "https://drive.google.com/file/d/113JmbvYI0rav1FuNybiQuE2NmPdtgnS_/view",
  },
  {
    Title: "EOA 2017-18",

    href: "https://drive.google.com/file/d/1svT36MVlnui8OEQQIrzK3JA0GOPOtD8w/view",
  },
  {
    Title: "EOA 2016-17",

    href: "https://drive.google.com/file/d/1XSQvp_Idau69ZHNyexZQmjDr20z2RVWF/view",
  },
];

export default function List() {
  return (
    <ul role="list" className="divide-y divide-gray-100  ">
      {Files.map((item) => (
        <li key={item.Title} className="flex justify-between gap-x-32 py-8 ">
          <div className="flex min-w-0 gap-x-4">
            <DocumentTextIcon
              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-lg font-poppins leading-6 text-gray-900">
                {item.Title}
              </p>
            </div>
          </div>

          <div className="ml-4 flex-shrink-0">
            <a
              href={item.href}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              <ArrowRightIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
