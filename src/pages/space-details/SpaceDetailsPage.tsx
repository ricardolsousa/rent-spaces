import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSpace } from "../../services/space/SpaceService";

const SpaceDetailsPage = () => {
  const { spaceId } = useParams();
  const [space, setSpace] = useState<any>(null);

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        if (spaceId) {
          const newSpace = await getSpace(spaceId);

          if (newSpace) {
            setSpace(newSpace);
          }
        }
      } catch (e) {
        console.error(e);
        throw new Error("Error trying to get space");
      }
    };

    fetchSpace();
  }, [spaceId]);

  return (
    <div className="py-4 px-48">
      {space && (
        <div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-950 mb-1">
              {space.title}
            </h2>
            <div className="flex items-center gap-2">{space.address}</div>
          </div>
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
              <div
                className="h-3"
                style={{ maxHeight: "100px", height: "100px" }}
              >
                <img
                  src="/images/spaces.webp"
                  alt=""
                  className="w-full object-cover h-full rounded"
                />
              </div>
              <div
                className="h-3"
                style={{ maxHeight: "100px", height: "100px" }}
              >
                <img
                  src="/images/spaces.webp"
                  alt=""
                  className="w-full object-cover h-full rounded"
                />
              </div>
              <div
                className="h-3"
                style={{ maxHeight: "100px", height: "100px" }}
              >
                <img
                  src="/images/spaces.webp"
                  alt=""
                  className="w-full object-cover h-full rounded"
                />
              </div>
              <div
                className="h-3"
                style={{ maxHeight: "100px", height: "100px" }}
              >
                <img
                  src="/images/spaces.webp"
                  alt=""
                  className="w-full object-cover h-full rounded"
                />
              </div>
              <div
                className="h-3"
                style={{ maxHeight: "100px", height: "100px" }}
              >
                <img
                  src="/images/spaces.webp"
                  alt=""
                  className="w-full object-cover h-full rounded"
                />
              </div>
            </div>
          </div>
          <div>{JSON.stringify(space, null, 2)}</div>
        </div>
      )}
    </div>
  );
};

export default SpaceDetailsPage;
