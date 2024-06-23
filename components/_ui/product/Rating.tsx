
import React, { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

interface RatingProps {
    totalStars?: number;
}

const Rating: React.FC<RatingProps> = ({ totalStars = 5 }) => {

    return (
        <div className="flex space-x-1">
            <BsStarFill className="text-xs text-secondary-warning" />
            <BsStarFill className="text-xs text-secondary-warning" />
            <BsStarFill className="text-xs text-secondary-warning" />
            <BsStarFill className="text-xs text-secondary-warning" />
            <BsStar className="text-xs text-gray-gray2" />
        </div>
    );
};

export default Rating;
