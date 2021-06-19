import React from 'react';
import img1 from '../../../Images/service-1.png'
import { blogCardDataType } from '../MainBlog/MainBlog'
interface blogCardProps {
    dt: blogCardDataType

}
const BlogCarrd: React.FC<blogCardProps> = (props) => {
    const { title, date, discription } = props.dt
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                </div>

                <div className="card-body">
                    <p>{date}</p>
                </div>
            </div>

        </div>

    );
};

export default BlogCarrd;