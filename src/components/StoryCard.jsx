'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '@/components/Button';

export default function StoryCard({
    header,
    image,
    date,
    caseTitle,
    caseDescription,
    supportDetails,
    buttonText,
    buttonClick,
    buttonClasses,
    themeColorClass,
    cardClasses
}){
        return (
        <div className={`flex flex-col rounded-4xl overflow-hidden mx-auto w-fit h-fit shadow-lg ${cardClasses}`}>
            <div className={`${themeColorClass} rounded-t-2xl flex items-center justify-center h-20`}>
                <h1 className="font-extrabold text-5xl text-white text-center">{header}</h1>
            </div>
                <div className="relative w-full h-100 overflow-hidden">
                    <Image
                        src={image}
                        alt={header}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-10">
                <p className="text-right text-gray-500 text-xl mb-4">{date}</p>
                <h2 className="text-5xl font-extrabold mb-4">{caseTitle}</h2>
                <p className="text-black text-xl text-justify">{caseDescription}</p>
            </div>
            <div className={`${themeColorClass} flex items-center justify-center h-18`}>
                <h3 className="font-extrabold text-5xl text-white text-center">Forma de Apoyo</h3>
            </div>
            <div className="p-6 text-center">
                { supportDetails && supportDetails }
            </div>
            <div className="p-10 mt-auto">
                <Button 
                onClick={buttonClick} 
                additionalClasses={`w-fit h-fit rounded-full !text-4xl font-medium mx-auto flex items-center justify-center text-white ${buttonClasses}`}>
                {buttonText}
                </Button>
            </div>
        </div>
    );
}

StoryCard.propTypes = {
    header: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    caseTitle: PropTypes.string.isRequired,
    caseDescription: PropTypes.string.isRequired,
    supporDetails: PropTypes.node,
    buttonText: PropTypes.string.isRequired,
    buttonClick: PropTypes.func.isRequired,
    buttonClasses: PropTypes.string,
    themeColorClass: PropTypes.string.isRequired,
    cardClasses: PropTypes.string,
};