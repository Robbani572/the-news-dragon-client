import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
// const Rating = require('react-rating');

const NewsCard = ({ news }) => {


    const { _id, title, author, image_url, details, rating, total_view } = news;

    return (
        <div>
            <Card className="mb-4 border-0">
                <Card.Header className='d-flex align-items-center gap-4'>
                    <div>
                        <Image style={{ height: '50px' }} src={author.img} roundedCircle />
                    </div>
                    <div className='flex-grow-1'>
                        <h5>{author.name}</h5>
                        <p>{author.published_date}</p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> :
                                <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <div className='d-inline-flex align-items-center gap-2 text-warning'>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                        <span>{rating?.number}</span>
                    </div>
                    <div className='d-inline-flex align-items-center gap-2'>
                        <FaEye></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;