
// import PropTypes from 'prop-types';

import PricingOption from "../PricingOption/PricingOption";

const PricingOptions = () => {
    const memberships = [
        {
            id: 1,
            name: 'Basic',
            price: '$20',
            features: ['Access to gym equipment', 'Locker room access']
        },
        {
            id: 2,
            name: 'Standard',
            price: '$35',
            features: ['Access to gym equipment', 'Locker room access', 'Access to group fitness classes']
        },
        {
            id: 3,
            name: 'Premium',
            price: '$50',
            features: ['Access to gym equipment', 'Locker room access', 'Access to group fitness classes', 'Personal training sessions', 'Nutrition counseling']
        }
    ];
    return (
        <div className="mx-auto container my-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    memberships.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

PricingOptions.propTypes = {

};

export default PricingOptions;