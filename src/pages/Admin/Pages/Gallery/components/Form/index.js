import { PhotoIcon } from "@heroicons/react/24/solid";

export default function Form() {
  return (
    <form>
      <div className="space-y-12">
        <div className="mt-10 grid xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 py-8 mx-12">
          <div className="">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Profile Photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a Photo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            <div className="sm:col-span-3">
              <label
                htmlFor="departments"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Choose
              </label>
              <div className="mt-2">
                <select
                  id="departments"
                  name="departments"
                  autoComplete="departments-name"
                  className="block w-full bg-white rounded-md border-0 py-1.5 px-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>IPT</option>
                  <option>IEDC</option>
                  <option>NCC</option>
                  <option>NSS</option>
                  <option>HOSTEL</option>
                  <option>AUDITORIUM</option>
                  <option>CANTEEN</option>
                  <option>WORKSHOP</option>
                  <option>ASAP</option>
                  <option>LIBRARY</option>
                  <option>SEMINAR HALL</option>
                  <option>OTHERS</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add New
        </button>
      </div>
    </form>
  );
}
