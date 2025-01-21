const SpaceDetailsImage = () => {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <div className="grid grid-cols-2 gap-2 grid-cols-5">
        <div
          className="w-full col-span-3"
          style={{ maxHeight: "360px", height: "360px" }}
        >
          <img
            src="/images/spaces.webp"
            alt=""
            className="w-full object-cover h-full rounded"
          />
        </div>
        <div className="grid grid-rows-2 gap-2 col-span-2">
          <div
            className="w-full h-3"
            style={{ maxHeight: "175px", height: "175px" }}
          >
            <img
              src="/images/spaces.webp"
              alt=""
              className="w-full object-cover h-full rounded"
            />
          </div>
          <div
            className="w-full h-3"
            style={{ maxHeight: "175px", height: "175px" }}
          >
            <img
              src="/images/spaces.webp"
              alt=""
              className="w-full object-cover h-full rounded"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <div className="h-3" style={{ maxHeight: "100px", height: "100px" }}>
          <img
            src="/images/spaces.webp"
            alt=""
            className="w-full object-cover h-full rounded"
          />
        </div>
        <div className="h-3" style={{ maxHeight: "100px", height: "100px" }}>
          <img
            src="/images/spaces.webp"
            alt=""
            className="w-full object-cover h-full rounded"
          />
        </div>
        <div className="h-3" style={{ maxHeight: "100px", height: "100px" }}>
          <img
            src="/images/spaces.webp"
            alt=""
            className="w-full object-cover h-full rounded"
          />
        </div>
        <div className="h-3" style={{ maxHeight: "100px", height: "100px" }}>
          <img
            src="/images/spaces.webp"
            alt=""
            className="w-full object-cover h-full rounded"
          />
        </div>
        <div className="h-3" style={{ maxHeight: "100px", height: "100px" }}>
          <img
            src="/images/spaces.webp"
            alt=""
            className="w-full object-cover h-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailsImage;
