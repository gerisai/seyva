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
        <div className={`flex flex-col rounded-4xl overflow-hidden mx-auto h-fit shadow-lg ${cardClasses}
            lg:w-3/4
            xs:w-full
        `}>
            <div className={`${themeColorClass} rounded-t-2xl flex items-center justify-center 
                lg:h-20
                md:h-18
                xs:h-18
            `}>
                <h1 className="font-extrabold text-white text-center
                    lg:text-5xl
                    md:text-4xl
                    xs:text-3xl
                ">
                    {header}
                </h1>
            </div>
                <div className="relative w-full overflow-hidden
                    2xl:h-140
                    xl:h-120
                    lg:h-100
                    md:h-80
                    sm:h-60
                    xs:h-50
                ">
                    <Image
                        src={image}
                        alt={header}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="lg:p-10 md:p-8 sm:p-6 xs:p-4">
                <p className="text-right text-gray-500 mb-4
                    sm:text-xl
                    xs:text-xs
                ">
                    {date}
                </p>
                <h2 className="text-gray font-extrabold md:mb-4 xs:mb-2
                    lg:text-5xl
                    md:text-4xl
                    sm:text-3xl
                    xs:text-2xl
                ">
                    {caseTitle}
                </h2>
                <p className="text-black text-justify md:text-xl sm:text-sm xs:text-xs">
                    {caseDescription}
                </p>
            </div>
            <div className={`${themeColorClass} flex items-center justify-center py-4`}>
                <h3 className="font-extrabold text-white text-center
                    lg:text-5xl
                    md:text-4xl
                    sm:text-3xl
                    xs:text-2xl
                ">
                    Forma de Apoyo
                </h3>
            </div>
            <div className="p-6 text-center">
                { supportDetails && supportDetails }
            </div>
            <div className="md:p-10 xs:p-4 mt-auto">
                <Button 
                onClick={buttonClick} 
                additionalClasses={`w-fit h-fit rounded-full font-medium mx-auto flex items-center justify-center text-white ${buttonClasses}
                lg:text-4xl
                md:text-3xl
                sm:text-sm
                xs:text-xs
                `}>
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