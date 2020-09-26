import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Rating from './Rating';

// TODO: get from back-end
const therapists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((v) => ({
    id: v.toString(),
    name: 'Therapist #' + v,
    type: 'Cat Therapist',
    description: 'Specialises in cuddles',
    picture: 'https://placekitten.com/500/500?image=' + v,
    ratings: {
        effectiveness: (72 + (9 * v) ** 2) % 60 + 40,
        friendliness: (93 + (8 * v) ** 2) % 60 + 40,
        affordability: (57 + (7 * v) ** 2) % 60 + 40,
    }
}));

const TherapistReview = () => {
    const { therapistId } = useParams();
    const therapist = therapists[parseInt(therapistId) - 1];

    return (
        <>
            <Link className="text-dark" to={'/therapists/' + therapist.id}><h5>◀ Back to therapist</h5></Link>

            <div class="card shadow mb-3" style={{ overflow: 'hidden' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={therapist.picture} alt={'Picture of ' + therapist.name} width='100%' />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
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

            <div class="card shadow mb-3" style={{ overflow: 'hidden' }}>
                <div class="card-body">
                    <h5>Rate this Therapist</h5>

                    <div class="form-group my-3">
                        <label for="reviewTitle">Title of your review</label>
                        <input type="text" class="form-control" id="reviewTitle" placeholder={'Summarise your thoughts about ' + therapist.name} />
                    </div>

                    <div class="form-group my-3">
                        <label for="reviewContent">Your review</label>
                        <textarea class="form-control" id="reviewContent" placeholder={'Has therapy with ' + therapist.name + ' helped you? What are they doing well, and what could they improve?'} rows='3' />
                    </div>

                    <div class="form-check my-3">
                        <input class="form-check-input" type="checkbox" id="reviewRecommend" />
                        <label class="form-check-label" for="reviewRecommend">Would you recommend {therapist.name}?</label>
                    </div>

                    <br class="my-4" />

                    <div class="my-4">
                        <label for="reviewEffectiveness" class="form-label">How effective is {therapist.name}?</label>
                        <input type="range" min="0" max="100" step="1" class="form-range" id="reviewEffectiveness"></input>
                    </div>

                    <div class="my-4">
                        <label for="reviewFriendliness" class="form-label">How friendly is {therapist.name}?</label>
                        <input type="range" min="0" max="100" step="1" class="form-range" id="reviewFriendliness"></input>
                    </div>

                    <div class="my-4">
                        <label for="reviewAffordability" class="form-label">How affordable is {therapist.name}?</label>
                        <input type="range" min="0" max="100" step="1" class="form-range" id="reviewAffordability"></input>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default TherapistReview;