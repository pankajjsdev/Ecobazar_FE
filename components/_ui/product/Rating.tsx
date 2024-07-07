
import React, { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

interface RatingProps {
    totalStars?: number;
}

const Rating: React.FC<RatingProps> = ({ totalStars = 5 }) => {

    return (
        <div className="flex space-x-1">
            {
                Array.from({ length: totalStars }).map((item, index) => {
                    return (
                        <BsStarFill key={index} className="text-xs text-secondary-warning" />
                    )
                })
            }
            {
                Array.from({ length: 5 - totalStars }).map((item, index) => {
                    return (
                        <BsStar key={index} className="text-xs text-gray-gray2" />
                    )
                })
            }


        </div>
    );
};

export default Rating;
