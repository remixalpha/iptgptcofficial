import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

// Backend
import { image_url, FetchRequest } from "../../../../../utils/agent";

export default function List() {
  const [Certificates, setCertificates] = useState([]);
  function fetchCertificate() {
    FetchRequest("/aicte/")
      .then(async (res) => {
        if (res.statusText === "OK") {
          // console.log(res.data.doNotTrack);
          setCertificates(res.data.doc);
        } else {
          console.error("response not found");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("API REQUEST"));
  }
  useEffect(() => {
    fetchCertificate();
    return () => {};
  }, []);
  return (
    <ul role="list" className="divide-y divide-gray-100  ">
      {Certificates.map((item) => (
        <li key={item.id} className="flex justify-between gap-x-32 py-8 ">
          <div className="flex min-w-0 gap-x-4">
            <DocumentTextIcon
              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-lg font-poppins leading-6 text-gray-900">
                {item.name} {item.year}
              </p>
            </div>
          </div>

          <div className="ml-4 flex-shrink-0">
            <a
              href={`${image_url + item.fileUrl}`}
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
