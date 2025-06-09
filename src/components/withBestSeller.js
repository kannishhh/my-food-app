const withBestSeller = (WrappedComponent) => {
  return (props) => {
    const { item } = props;

    const isBestSeller = item?.ribbon?.text === "Bestseller";

    return (
      <div className="relative">
        {isBestSeller && (
          <div className="inline-block text-red-500 text-sm font-semibold px-1 py-0.5">
            Bestseller
          </div>
        )}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBestSeller;
