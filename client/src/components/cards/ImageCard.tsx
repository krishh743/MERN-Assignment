import React from 'react';
import { Card } from 'antd';
// import DEFAULT_IMAGE from "../../../public/assets/images/cards/1.png"

const ImageCards = (props: {
  blogCount: number;
  blogName: string;
  cardImage: any;
  onOpenHandler: any;
  onAnalyticsHandler: any;
  schoolId: number;
}) => {
  // const [hovered, setHovered] = useState(false);
  const { Meta } = Card;

  return (
    <div className="flex justify-center ">
      <div>
        <div className="group">
          <div className="relative ">
            <Card
              className="group-hover:shadow-md min-w-[220px] max-w-[240px]"
              // style={{ width: 240 }}
              cover={
                <div className="group-hover:bg-black  rounded-[10px]">
                  <img
                    // srcSet={props.cardImage ,DEFAULT_IMAGE}

                    alt="example"
                    className="h-60 w-full transition-opacity duration-300 group-hover:opacity-60"
                    src={props.cardImage}
                  />
                </div>
              }
              // onClick={props.onOpenHandler}
            >
              {/* Card content */}
              <Meta
                title={props.blogName}
                description={`${props.blogCount} Blogs`}
              />

              {/* Buttons */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-col items-center justify-center gap-2">
                  <button
                    onClick={props.onOpenHandler}
                    className=" w-[200px] p-2 bg-white text-black  rounded-xl"
                  >
                    <b>Open</b>
                  </button>
                  <button
                    onClick={props.onAnalyticsHandler}
                    className="border w-[200px] p-2 text-white border-[#EFEFEF] rounded-xl bg-transparent"
                  >
                    <b>Analytics</b>
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
