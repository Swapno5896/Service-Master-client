import React from "react";
import img1 from "../../../Images/service-1.png";
import ShopCard from "../ShopCard/ShopCard";
import SideBar from "../SideBar/SideBar";
const MainShop = () => {
  const shopData = [
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
    {
      Img: img1,
      Title: "Pro XL Drill",
      Rating: 4,
      PrivuousPrice: 300,
      CurrentPrice: 279,
      Description:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis exercitationem natus quo doloribus, enim et maxime. Aperiam perspiciatis repellat vero voluptate eligendi adipisci eum porro assumenda harum, ab sed alias        ",
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {shopData.map((dt) => (
              <ShopCard dt={dt} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          {shopData.map((dt) => (
            <SideBar dt={dt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainShop;
