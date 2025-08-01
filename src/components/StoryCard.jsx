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
    supporDetails,
    buttonText,
    buttonClick,
    buttonClasses,
    themeColorClass,
    cardClasses,    
}){
        return (
        <div className={`flex flex-col rounded-[40px] overflow-hidden mx-auto w-[903px] h-[1527px] shadow-lg ${cardClasses}`}>
            <div className={`${themeColorClass} rounded-t-2xl flex items-center justify-center h-[92px]`}>
                <h1 className="font-extrabold text-[52px] leading-[54px] text-white text-center">{header}</h1>
            </div>
                <div className="relative w-full h-[413px] overflow-hidden">
                    <Image
                        src={image}
                        alt="Tarjeta de Historia"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-10">
                <p className="text-right text-gray-500 text-xl mb-4 leading-normal">{date}</p>
                <h2 className="text-[52px] font-extrabold text-[#3D3D3D] mb-4 leading-[54.8px]">{caseTitle}</h2>
                <p className="text-black text-[19.29px] leading-[25.7px] text-justify">{caseDescription}</p>
            </div>            
            <div className={`${themeColorClass} flex items-center justify-center h-[73px]`}>
                <h3 className="font-extrabold text-[52px] leading-[54px] text-white text-center">Forma de Apoyo</h3>
            </div>
            <div className="p-6 text-center">
                { supporDetails && supporDetails }
            </div>
            <div className="p-10 mt-auto">
                <Button 
                onClick={buttonClick} 
                additionalClasses={`w-[455px] h-[73px] rounded-[36.5px] text-[40px] font-medium mx-auto flex items-center justify-center text-white ${buttonClasses}`}>
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