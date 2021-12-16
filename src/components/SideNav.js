import Toggle from "./Toggle";

export default function SideNav() {
  return (
    <div className="fixed bottom-8 left-8 border border-zinc-300 rounded-2xl shadow w-[300px] h-[520px] bg-zinc-200">
      <div className="absolute -top-5 w-full flex justify-center">
        <Toggle />
      </div>
      <div className="flex justify-center text-slate-800 mt-10">
        <button className="uppercase py-2 px-5 bg-white rounded-full shadow">
          blog
        </button>
      </div>
      <div className="w-5/6 mx-auto mt-5">
        <div>
          <button className="text-sm uppercase py-2 px-3 w-full bg-sky-500 text-white rounded-md shadow text-left">
            seminar & workshop
          </button>
          <ul className="mt-2 space-y-2">
            <li>
              <button className="text-sm py-2 px-3 text-left w-full bg-white hover:underline rounded-md shadow">
                seminar & workshop
              </button>
            </li>
            <li>
              <button className="text-sm py-2 px-3 text-left w-full bg-white hover:underline rounded-md shadow">
                seminar & workshop
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
