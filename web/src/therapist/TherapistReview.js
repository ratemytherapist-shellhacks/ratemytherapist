import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const TherapistReview = ({ therapist }) => {
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

                    <div className="form-group my-3">
                        <label htmlFor="reviewTitle">Title of your review</label>
                        <input type="text" className="form-control" id="reviewTitle" placeholder={'Summarise your thoughts about ' + therapist.name} />
                    </div>

                    <div className="form-group my-3">
                        <label htmlFor="reviewContent">Your review</label>
                        <textarea className="form-control" id="reviewContent" placeholder={'Has therapy with ' + therapist.name + ' helped you? What are they doing well, and what could they improve?'} rows='3' />
                    </div>

                    <div className="form-check my-3">
                        <input className="form-check-input" type="checkbox" id="reviewRecommend" />
                        <label className="form-check-label" htmlFor="reviewRecommend">Would you recommend {therapist.name}?</label>
                    </div>

                    <br className="my-4" />

                    <div className="my-3">
                        <label htmlFor="reviewEffectiveness" className="form-label">How effective is {therapist.name}?</label>
                        <input type="range" min="0" max="100" step="1" className="form-range" id="reviewEffectiveness"></input>
                    </div>

                    <div className="my-3">
                        <label htmlFor="reviewFriendliness" className="form-label">How friendly is {therapist.name}?</label>
                        <input type="range" min="0" max="100" step="1" className="form-range" id="reviewFriendliness"></input>
                    </div>

                    <div className="my-3">
                        <label htmlFor="reviewAffordability" className="form-label">How affordable is {therapist.name}?</label>
                        <input type="range" min="0" max="100" step="1" className="form-range" id="reviewAffordability"></input>
                    </div>

                    <Link className='btn btn-lg btn-outline-primary btn-block' to={'/therapists/' + therapist._id + '/review/thanks'}>Submit</Link>
                </div>
            </div>
        </>
    )
}

export default TherapistReview;