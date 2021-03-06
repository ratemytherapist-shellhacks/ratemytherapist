import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const TherapistReviewThanks = ({ therapist }) => {
    return (
        <>
            <Link className="text-dark" to={'/therapists/' + therapist._id}><h5>◀ Back to therapist</h5></Link>

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
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow mb-3" style={{ overflow: 'hidden' }}>
                <div className="card-body">
                    <h5>Rate this Therapist</h5>

                    <p>Thanks for your review! We'll publish it shortly, after being checked by our moderation team.</p>

                    <Link className='btn btn-outline-primary' to={'/therapists/' + therapist._id}>Back to Therapist</Link>
                </div>
            </div>
        </>
    )
}

export default TherapistReviewThanks;