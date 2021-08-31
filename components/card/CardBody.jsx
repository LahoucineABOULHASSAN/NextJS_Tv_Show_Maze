import { formatNum } from "../../utilities/main";

const CardBody = () => {
  return (
    <ul className="border z-20 rounded-lg border-transparent bg-gray-100 grid grid-cols-3 divide-x divide-gray-300 w-full">
      <li className="text-md flex flex-col items-center cursor-default hover:bg-red-100 transition duration-700 ease py-2">
        <span className="text-gray-500 mt-1">test</span>
      </li>
      <li className="text-md flex flex-col items-center cursor-default hover:bg-gray-200 transition duration-700 ease py-2">
        <span className="text-gray-500 mt-1">test</span>
      </li>
      <li className="text-md flex flex-col items-center cursor-default hover:bg-green-100 transition duration-700 ease py-2">
        <span className="text-gray-500 mt-1">test</span>
      </li>
    </ul>
  );
};

export default CardBody;
