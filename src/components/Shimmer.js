const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-3 bg-gray-50 ">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            className="w-64 h-72 p-4 rounded-2xl bg-gray-100 animate-pulse shadow-md"
            key={index}
          >
            <div className="h-36 w-full bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-300  rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-300  rounded w-1/2 mb-3"></div>
            <div className="h-3 bg-gray-300  rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-300  rounded w-4/5"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
