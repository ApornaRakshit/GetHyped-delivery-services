import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const {userName, review: testimonial, user_photoURL } = review;
    return (
        <div className="max-w-lg">
            <div className="card bg-base-100 shadow-xl rounded-[32px] border border-base-200">
                <div className="card-body p-8">
                    {/* Quote Icon */}
                    <FaQuoteLeft className="text-5xl mb-4 text-primary" />

                    {/* Testimonial Text */}
                    <p className="text-lg leading-relaxed text-base-content/80">
                        {testimonial}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-dashed border-base-300 my-6"></div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-14 rounded-full"></div>
                        <img src={user_photoURL} alt="" />
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-base-content">
                                {userName}
                            </h3>
                            <p className="text-base-content/60">
                                Senior Product Designer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;