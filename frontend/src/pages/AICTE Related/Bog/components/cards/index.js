import Card from "../Card";
import Principal from "../../../../../assets/images/section/Home/Principal.jpeg";
import Member from "../../../../../assets/images/section/Departments/Office/Kamarunnisa.jpg";
import { UserIcon } from "@heroicons/react/24/outline";
const Governers = [
  {
    id: 1,
    name: "Dr K.A Navas",
    Post: "ChairMan",
    Designation: "Prof.of EC GEC, Kannur",
    imageSrc: "",
    imageAlt: "ChairMan",
    href: "#",
  },
  {
    id: 2,
    name: "Asha G Nair",
    Post: "principal",
    Designation: "principal IPT&GPTC Shornur",
    imageSrc: Principal,
    imageAlt: "Principal",
    href: "#",
  },
  {
    id: 3,
    name: "Preetha C",
    Post: "Member (industry)",
    Designation: "Divisional Engineer BSNL Shoranur",
    imageSrc: "",
    imageAlt: "Member",
    href: "#",
  },
  {
    id: 4,
    name: "Krishnakumar G P S",
    Post: "Member (industry)",
    Designation: "Dy Supdt, Govt press, Shoranur",
    imageSrc: "",
    imageAlt: "Member",
    href: "#",
  },
  {
    id: 5,
    name: "M Ramachandran",
    Post: "",
    Designation: "",
    imageSrc: Member,
    imageAlt: "Member",
    href: "#",
  },
  {
    id: 6,
    name: "Latha G K",
    Post: "Member (Institution)",
    Designation: "HOD Electronics and Communication Engineering",
    imageSrc: "",
    imageAlt: "Member",
    href: "#",
  },
];
export default function Governer() {
  return (
    <div className=" mx-auto  scale-90 grid grid-cols-1 gap-x-5 gap-y-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  ">
      {Governers.map((item) => (
        <Card extra=" lg:w-[18rem] border  ">
          <div key={item.id} className=" p-10  ">
            <div className="flex justify-center items-center   group-hover:opacity-75  ">
              {item.imageSrc ? (
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-[8rem] w-[8rem] rounded-full object-cover "
                />
              ) : (
                <UserIcon
                  className="h-[8rem] w-[8rem]  text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              )}
            </div>

            <div className="mt-2 flex flex-col gap-y-2  items-center justify-center ">
              <h1
                className="mt-5 text-2xl font-semibold text-gray-900"
                style={{ textAlign: "center" }}
              >
                <a href={item.href}>
                  <span className="absolute inset-0" />
                  {item.name}
                </a>
              </h1>
              <p
                className="mt-1 text-xl text-gray-700"
                style={{ textAlign: "center" }}
              >
                {item.Post}
              </p>
              <p
                className="mt-1 text-sm text-gray-500"
                style={{ textAlign: "center" }}
              >
                {item.Designation}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
