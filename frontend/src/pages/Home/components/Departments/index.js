import Card from "./Card/index";
import COMPUTER from "../../../../assets/images/section/Departments/Computer.jpg";
import ELECTRONICS from "../../../../assets/images/section/Departments/Electronics.jpg";
import PRINTING from "../../../../assets/images/section/Departments/Printing.jpg";
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
];
export default function Reference() {
  return (
    <div className="relative -top-10 scale-110 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-4xl pb-10 font-bold leading-8 text-gray-900">
          Departments
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {Department.map((item) => (
            <Card>
              <div
                key={Department.id}
                className="group relative border border-gray-800 rounded-primary"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  rounded-primary group-hover:rounded-none  bg-white lg:aspect-none group-hover:opacity-75 lg:h-[15rem]">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-contain lg:h-full lg:w-full rounded-primary mt-4"
                  />
                </div>

                <div className="mt-4 flex justify-between p-8 ">
                  <div>
                    <h3 className="text-xl font-bold text-navy-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {Department.Des}
                    </p>
                  </div>
                </div>

                <a href={item.href}>
                  <div className="flex flex-row relative -left-4 mb-9 -mt-6 scale-75 ">
                    <button
                      type="submit"
                      className=" flex w-[10rem] items-center justify-center rounded-md  bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Read More
                    </button>{" "}
                    <div className="relative top-4 right-8 w-5 h-5 text-white cursor-pointer ">
                      <FiChevronRight />
                    </div>
                  </div>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
