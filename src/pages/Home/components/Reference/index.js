import Card from "./Card/index";
import ADMISSION from "../../../../assets/images/Links/govlogo1.jpg";
import DTE from "../../../../assets/images/Links/1.gif";
import AICTE from "../../../../assets/images/Links/aicte(1).png";
import TEKERALA from "../../../../assets/images/Links/te3.gif";
import TEAMS from "../../../../assets/images/Links/teams-logo.png";
import MOODLE from "../../../../assets/images/Links/moodle.png";
import QUESTION from "../../../../assets/images/Links/qp.png";
import SYLLABUS from "../../../../assets/images/Links/sylabuss.png";

export default function Reference() {
  return (
    <div className="relative -top-10 bg-white scale-110 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-4xl pb-10 font-bold leading-8 text-gray-900">
          Reference
        </h1>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={ADMISSION}
                alt="ADMISSION"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">ADMISSION</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" rounded-lg col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={DTE}
                alt="DTE"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">DTE</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={ADMISSION}
                alt="SITTTR"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">SITTTR</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={AICTE}
                alt="AICTE"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">AICTE</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={ADMISSION}
                alt="SBTE"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">SBTE</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={TEKERALA}
                alt="TE KERALA"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">TE KERALA</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={TEAMS}
                alt="TEAMS"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">TEAMS</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={MOODLE}
                alt="MOODLE"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">MOODLE</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={ADMISSION}
                alt="CANDIATE LOGIN"
                width={158}
                height={48}
              />
              <h1 className="text-center  text-md font-bold">CANDIATE LOGIN</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={QUESTION}
                alt="QUESTION PAPERS"
                width={158}
                height={48}
              />
              <h1 className=" text-center text-md font-bold">
                QUESTION PAPERS
              </h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={ADMISSION}
                alt="SDC"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">SDC</h1>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center justify-center gap-y-2 ">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={SYLLABUS}
                alt="SYLLABUS"
                width={158}
                height={48}
              />
              <h1 className=" text-md font-bold">SYLLABUS</h1>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
