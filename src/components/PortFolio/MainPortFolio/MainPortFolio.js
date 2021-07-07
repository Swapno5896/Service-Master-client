import React, { useEffect } from "react";
import PortFolioCard from "../PortFolioCard/PortFolioCard";
import { loadPortfolioAsync } from "../../../redux/action/action";
import { connect } from "react-redux";
const mapDispatchToProps = {
  loadPortfolioAsync,
};

const mapStateToProps = (state) => {
  return {
    portfoilo: state.portfoilo.portfoilo,
    isloading: state.isLoading,
  };
};
const MainPortFolio = (props) => {
  console.log("from portfolio", props);
  useEffect(() => {
    props.loadPortfolioAsync();
  }, []);

  if (props.isloading == true) {
    return (
      <div
        style={{ height: "700px" }}
        class="d-flex justify-content-center align-items-center "
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
  const uploadBlog = () => {
    fetch('http://localhost:9000/addPortfolio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proftfolio),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const proftfolio = [
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h9-port-img-15.jpg
      `,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h9-port-img-16.jpg`,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h10-port-img-1.jpg
      `,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h10-port-img-2.jpg
      `,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h9-port-img-9.jpg
      `,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h9-port-img-10.jpg
      `,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h9-port-img-11.jpg
      `,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
    {
      img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/h9-port-img-12.jpg
      `,
      Titile: "Corporate Center",
      Description:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum, laborum nesciunt asperiores repellendus reiciendis praesentium similique molestias consectetur, amet accusamus! Repudiandae minima rem facere laudantium reiciendis odio iure in        ",
    },
  ];

  return (
    <div class="d-flex justify-content-center pb-5 mp-5">
      <button onClick={uploadBlog}>upload blog</button>
      <div className="row" style={{ padding: "0px 70px" }}>
        {proftfolio.map((dt) => (
          <PortFolioCard dt={dt} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPortFolio);
