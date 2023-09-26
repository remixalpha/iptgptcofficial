import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "../../../../../assets/images/Banner/ipt banner 2.jpeg";
export default function SCST() {
  return (
    <div className="relative isolate overflow-hidden w-[200rem] bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 transition-all duration-300 ">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2  text-gray-900 sm:text-4xl antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3">
                SC-ST COMMITTEE
              </h1>
              <p className="mt-6 text-xl  text-gray-700 text-justify  block antialiased font-sans font-normal leading-relaxed  ">
                The scheduled Caste (SC) and Scheduled Tribes (ST) Cell in an
                institute promotes the special interest of students in the
                reserved category and to provide special inputs in areas where
                the students experience difficulties.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={Image}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl  text-base leading-7 text-gray-700 text-justify  block antialiased font-sans font-normal  lg:max-w-lg">
              <p>
                As per the order no: C1/2722/21, IPT& GPTC, dated: 09/11/2021,
                SC/ST committee has been formed to take care of the welfare of
                the SC/ST students in the institution.
              </p>

              <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl  antialiased  font-sans  leading-[1.3]  mb-3">
                The Committee Members Are:
              </h1>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowRightIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Sri. Raveendran T.K (Lecturer)
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Smt. Saani H (Lecturer)
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Smt.Saritha P.C (Lecturer)
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Sri.Sivan P.C (Workshop Instructor)
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Sri.Vinodkumar K (Demonstrator)
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Kum.Aswathi P(Demonstrator)
                    </strong>{" "}
                  </span>
                </li>
              </ul>

              <p className="mt-8 text-justify  block antialiased font-sans  font-normal leading-relaxed">
                The judicious committee meetings were conducted for monitoring
                and analysing various activities of SC/ST student welfare and to
                resolve various issues related (if any) with SC/ST students. E
                grantz, Meritorious Scholarship , Study Room Grant , Laptop
                Grant through college , Laptop Grant applications through
                various LSGDs , SC Development Scholarships activities are well
                monitored
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
