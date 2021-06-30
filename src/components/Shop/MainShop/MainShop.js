import React, { useEffect } from "react";
import { connect } from "react-redux";
import img1 from "../../../Images/service-1.png";
// import ShopCard from "../ShopCard/ShopCard";
// import SideBar from "../SideBar/SideBar";
import { loadProductAsync } from "../../../redux/action/action";

const mapDispatchToProps = {
  loadProductAsync,
};

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    isloading: state.isLoading,
  };
};
const MainShop = (props) => {
  useEffect(() => {
    props.loadProductAsync();
  }, []);
  console.log("props from shop", props);
  console.log("loading info", props.isloading);
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

  if (props.isloading == true) {
    return (
      <div
        style={{ height: "700px" }}
        class="d-flex justify-content-center align-items-center"
      >
        <div
          style={{ width: "3rem", height: "3rem" }}
          class="spinner-border"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* <h1>{props.isloading}</h1> */}

      <ol>
        {props.product?.map((pd) => (
          <li>{pd.name}</li>
        ))}
      </ol>
      {/* <div className="row">
        <div className="col-md-8">
          <div className="row">
            {shopData.map((dt) => (
              <ShopCard dt={dt} />
            ))}
          </div>
        </div>
        <div
          className="col-md-4"
          style={{ height: "680px", overflow: "scroll" }}
        >
          {shopData.map((dt) => (
            <SideBar dt={dt} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainShop);
