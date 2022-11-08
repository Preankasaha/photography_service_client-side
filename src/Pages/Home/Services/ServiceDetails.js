import React from 'react';
import Review from '../Review/Review';

import ServiceDetailsCard from './ServiceDetailsCard';

const ServiceDetails = () => {

    return (
        <div>
            <ServiceDetailsCard></ServiceDetailsCard>
            <Review />
        </div>
    );
};

export default ServiceDetails;