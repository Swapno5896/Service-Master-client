import React from 'react';
import img1 from '../../../Images/service-1.png'
interface sideblogProps {
    dt: {
        title: string;
        date: string;
        discription: string;
        _id: string;
        img: string;
    }

}
const SideBlogs: React.FC<sideblogProps> = (props) => {
    // const { authorName, authorImg, title, description, date } = props.dt
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>

            {/* <div className="card-body"> */}
            {/* <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={authorImg} alt="..." />
                    </div>
                    <div className="col-md-6">
                        <p>By : {authorName}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </div> */}
        </div>

    );
};

export default SideBlogs;