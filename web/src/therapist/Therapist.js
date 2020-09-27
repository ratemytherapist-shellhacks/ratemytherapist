import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Therapist = ({ therapist }) => {
    return (
        <>
            <Link className="text-dark" to="/therapists"><h5>◀ Back to all therapists</h5></Link>

            <div className="card shadow mb-3" style={{ overflow: 'hidden' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={therapist.picture} alt={'Picture of ' + therapist.name} width='100%' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className='mb-0'>{therapist.name}</h5>
                            <p className="text-secondary">{therapist.type}</p>
                            <p>{therapist.description}</p>
                            <Rating name='Effectiveness' value={therapist.ratings.effectiveness} />
                            <Rating name='Friendliness' value={therapist.ratings.friendliness} />
                            <Rating name='Affordability' value={therapist.ratings.affordability} />
                            <Link className='btn btn-outline-primary mt-4' to={'/therapists/' + therapist._id + '/review'}>Rate this Therapist</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow mb-3">
                {therapist.reviews.map(r => (
                    <Review key={r.id} review={r} />
                ))}
            </div>
        </>
    )
}

const Review = ({ review }) => {
    return (
        <div className="row g-0 py-2" style={{ borderBottom: '1px solid #ddd' }}>
            <div className="col-md-2 mt-4 d-none d-md-block" style={{ textAlign: 'center' }}>
                {review.recommends
                    ? <>
                        <img className="mb-2" width="60%" src='/thumbsup.png' alt='Thumbs up' />
                        <p className="text-muted">Would recommend</p>
                    </>
                    : <>
                        <img className="mb-2" width="60%" src='/thumbsdown.png' alt='Thumbs down' />
                        <p className="text-muted">Would not<br />recommend</p>
                    </>
                }
            </div>
            <div className="col-md-10">
                <div className="card-body">
                    <h5><span className="d-md-none">{review.recommends ? '👍' : '👎'} </span>{review.title}</h5>
                    <p>{review.content}</p>
                    <Rating name='Effectiveness' value={review.ratings.effectiveness} />
                    <Rating name='Friendliness' value={review.ratings.friendliness} />
                    <Rating name='Affordability' value={review.ratings.affordability} />
                </div>
            </div>
        </div>
    );
}

export default Therapist;