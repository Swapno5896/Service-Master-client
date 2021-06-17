import React from "react";
import img1 from "../../../Images/service-1.png";
import img2 from "../../../Images/service-2.png";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
const Description = () => {
  const describtionData = [
    {
      TopImg: img1,
      SubImg: img2,
      Title: "Our Services",
      Description:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta alias totam eos mollitia eum labore delectus, rerum nesciunt, ea nisi. Cupiditate quam expedita incidunt, hic enim eius voluptatem animi        ",
    },
    {
      TopImg: img1,
      SubImg: img2,
      Title: "Special Offers",
      Description:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta alias totam eos mollitia eum labore delectus, rerum nesciunt, ea nisi. Cupiditate quam expedita incidunt, hic enim eius voluptatem animi        ",
    },
    {
      TopImg: img1,
      SubImg: img2,
      Title: "Auto Transport",
      Description:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta alias totam eos mollitia eum labore delectus, rerum nesciunt, ea nisi. Cupiditate quam expedita incidunt, hic enim eius voluptatem animi        ",
    },
  ];
  return (
    <div>
      <div className="row">
        {describtionData.map((dt) => (
          <DescriptionCard dt={dt} />
        ))}
      </div>
    </div>
  );
};

export default Description;
