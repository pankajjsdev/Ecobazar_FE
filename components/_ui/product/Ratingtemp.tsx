"use client"
import React, { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

interface RatingProps {
    totalStars?: number;
}

const Rating: React.FC<RatingProps> = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState<number>(0);
    const [hoverRating, setHoverRating] = useState<number>(0);

    const handleClick = (index: number) => {
        setRating(index);
    };

    const handleMouseEnter = (index: number) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    return (
        <div className="flex space-x-1">
            {Array.from({ length: totalStars }, (_, index) => {
                const starIndex = index + 1;
                return (
                    <span
                        key={starIndex}
                        className="cursor-pointer"
                        onClick={() => handleClick(starIndex)}
                        onMouseEnter={() => handleMouseEnter(starIndex)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {starIndex <= (hoverRating || rating) ? (
                            <BsStarFill className="text-yellow-500" />
                        ) : (
                            <BsStar className="text-yellow-500" />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default Rating;
