export default function Toggle({ setSideNavOpened, isSideNavOpened, isHide }) {
  return (
    <button
      onClick={() => setSideNavOpened((crr) => !crr)}
      className={`${
        !isSideNavOpened ? "-translate-x-36 rotate-180" : "translate-x-0"
      } ${
        isHide ? "translate-y-[60vh]" : "translate-y-0"
      } h-10 w-10 bg-sky-500 text-white rounded-full p-2 fixed top-[85px] left-40 transform duration-500`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
