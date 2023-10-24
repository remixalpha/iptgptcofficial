import Card from "./Card/index";
import COMPUTER from "../../../../assets/images/section/Departments/Computer.jpg";
import ELECTRONICS from "../../../../assets/images/section/Departments/Electronics.jpg";
import PRINTING from "../../../../assets/images/section/Departments/Printing.jpg";
import GENERAL from "../../../../assets/images/section/Departments/General.jpg";
import { FiChevronRight } from "react-icons/fi";

const Department = [
  {
    id: 1,
    name: "Computer Engineering",
    href: "/computer",
    imageSrc: COMPUTER,
    imageAlt: "Computer Engineering",
    Des: "Computer Engineering Department was established in 1989. We have an annual intake of 60 with additional 10% for lateral entry students",
  },
  {
    id: 2,
    name: "Electronics Engineering",
    href: "/electronics",
    imageSrc: ELECTRONICS,
    imageAlt: "Electronics Engineering",
    Des: "Electronics Department established in the year 1988. The annual intake is 60 with an additional 10% lateral entry students at second year onwards.",
  },
  {
    id: 3,
    name: "Printing Technology",
    href: "/printing",
    imageSrc: PRINTING,
    imageAlt: "Printing Technology",
    Des: "The program was started in the year 1967 and successfully completed 50 years its existence as a Centre of excellence in Printing Technology",
  },
  {
    id: 4,
    name: "General Department",
    href: "/general",
    imageSrc: GENERAL,
    imageAlt: "General Department",
    Des: "The program was started in the year 1967 and successfully completed 50 years its existence as a Centre of excellence in Printing Technology",
  },
  {
    id: 5,
    name: "Mechanical Engineering Workshop",
    href: "/mechanical",
    imageSrc: PRINTING,
    imageAlt: "Mechanical Engineering Workshop",
    Des: "The program was started in the year 1967 and successfully completed 50 years its existence as a Centre of excellence in Printing Technology",
  },
];
export default function Reference() {
  return (
    <div className="relative top-24 xl:-top-10 xl:scale-110 sm:py-32 ">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h1 className="text-center  pb-10  text-gray-900  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
          Departments
        </h1>

        <div className="grid grid-cols-1 mt-6 cursor-pointer gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div className="absolute overflow-hidden inset-9 -z-10">
            <svg
              className="absolute left-[max(60%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          {Department.map((item, i) => (
            <Card key={i} extra={` border border-gray-800 rounded-primary`}>
              <div className="relative group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-primary bg-white lg:aspect-none group-hover:opacity-75 lg:h-[15rem]">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="object-contain w-full h-full mt-4 lg:h-full lg:w-full rounded-primary"
                  />
                </div>
                <div className="mx-2 bg-gray-50 rounded-primary">
                  <div className="flex justify-between p-8 mt-4 ">
                    <h3 className="font-sans text-xl antialiased font-semibold tracking-normal text-gray-800 text-md">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {Department.Des}
                    </p>
                  </div>

                  <a href={item.href}>
                    <div className="relative flex flex-row pb-6 mb-4 -mt-6 scale-75 group -left-4">
                      <button
                        type="submit"
                        className=" flex w-[10rem] items-center justify-center rounded-md   bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-gray-800  transition delay-150 duration-300 ease-in-out"
                      >
                        Read More
                      </button>
                      <div className="relative w-5 h-5 text-white transition-all duration-300 cursor-pointer top-4 right-8 group-hover:right-1 ">
                        <FiChevronRight />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
