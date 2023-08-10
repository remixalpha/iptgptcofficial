import Card from "./Card/index";
import Principal1 from "../../../../../assets/images/section/AboutUs/Principals/principal1.gif";

const Principals = [
  {
    id: 1,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 2,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 3,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 4,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 5,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 6,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 7,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 8,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 9,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 10,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 11,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
  {
    id: 12,
    name: "Ram kumar shin",
    href: "#",
    imageSrc: Principal1,
    imageAlt: "Principal",
    year: "1972 - 2000",
  },
];
export default function Principal() {
  return (
    <div className="mx-auto max-w-[100rem] px-20  relative -top-10 bg-white scale-125 sm:py-32    ">
      <h1 className="text-center text-4xl pb-10 font-bold leading-8 text-gray-900">
        List Of Principals
      </h1>

      <div className="mt-6 scale-90 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-6  xl:gap-x-8">
        {Principals.map((item) => (
          <Card extra=" lg:w-[15rem] border  ">
            <div key={item.id} className="group relative p-4  ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  rounded-primary  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[10rem]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-2 flex flex-col gap-y-2  items-center justify-center p-4 ">
                <h3 className="text-xl text-center font-bold text-navy-700">
                  <a href={item.href}>
                    <span aria-hidden="true" className="absolute inset-0 " />
                    {item.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm  text-gray-500">{item.year}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
