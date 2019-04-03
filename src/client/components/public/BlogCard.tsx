import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

const BlogCard: React.SFC<IBlogCardProps> = (props) => {

    const { id, title, firstname, lastname, _created, body } = props.blog;

    return (
        <>
            <h3 className='text-primary'>{title}</h3>
            <h4 className='text-danger'>{`${firstname} ${lastname}`}</h4>
            <h5 className='text-warning bg-dark p-1 d-inline-block'>{moment(_created).format('MMMM Do, YYYY')}</h5>
            <div className="bade-container my-2">
                {props.tags.map(tag => <span key={tag.id} className='badge badge-success text-dark p-1 my-1 mx-2 border border-danger shadow-sm'>{tag.name}</span>)}
            </div>
            <p className='my-1'>{body}</p>
            <div className="d-flex justify-content-around my-5">
                <Link to='/' className='btn btn-secondary border border-success rounded shadow btn-lg'>Go Back</Link>
                <Link to={`/edit/${id}`} className='btn btn-secondary border border-success rounded shadow btn-lg'>Edit</Link>
            </div>
        </>
    );
}

interface IBlogCardProps {
    blog: {
        id: number,
        title: string,
        body: string,
        authorid: number,
        _created: Date,
        firstname: string,
        lastname: string
    };
    tags: {
        id: number,
        name: string
    }[];
}

export default BlogCard;
