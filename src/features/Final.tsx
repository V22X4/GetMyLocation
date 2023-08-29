import React from 'react';
import '../style.css';

interface FinalProps {
    city: string,
    country: string,
}

const Final: React.FC<FinalProps> = (props: FinalProps): JSX.Element => {
    const city = props.city;
    const country = props.country;
    return (
        <div className='final-page-container'>
            Your city is <span className="font-bold-final">{city}</span> and your country is <span className="font-bold-final">{country}</span>.
        </div>
    );
};

export default Final;
