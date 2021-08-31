const CardHeader = () => {
  return (
    <div className="hidden z-10 absolute bottom-0 left-0 bg-black bg-opacity-60 flex-row items-center justify-between w-full py-3 px-4">
      <div className="flex flex-row items-center">
        <img className="w-10 h-10 rounded-full" src="" alt="{image.user}" />
        <h3 className="text-md text-gray-300 mx-3">user</h3>
      </div>
      <span className="cursor-pointer bg-blue-100 hover:bg-blue-200 transition duration-700 ease p-1 rounded">
        test
      </span>
    </div>
  );
};

export default CardHeader;
