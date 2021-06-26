import React from 'react';
import { useHistory } from "react-router-dom";
import img1 from '../../../Images/service-1.png'
import { blogCardDataType } from '../MainBlog/MainBlog'
interface blogCardProps {
    dt: blogCardDataType

}
const BlogCarrd: React.FC<blogCardProps> = (props) => {
    const { title, date, discription, id } = props.dt




    let history = useHistory();

    function handleClick() {
        history.push(`/blog/${id}`);
    }

    return (
        <div className="col-md-4 mt-4">
            <div onClick={handleClick} className="card" style={{ width: '22rem' }}>
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                </div>

                <div className="card-body d-flex">
                    <p className='me-auto'>{date}</p>
                    <button >Read More</button>
                </div>
            </div>

        </div>

    );
};

export default BlogCarrd;