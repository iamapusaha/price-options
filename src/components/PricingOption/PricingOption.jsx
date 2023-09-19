
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PricingOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='flex flex-col bg-blue-200 rounded-lg'>
            <div className='bg-blue-400 rounded-lg p-8 text-center'>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
                <h2 className='text-4xl'>{name}</h2>
            </div>

            <div className='flex-grow ps-4 '>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-blue-600 text-3xl w-full text-white rounded-md'>Buy Now</button>
        </div>
    );
};

PricingOption.propTypes = {
    option: PropTypes.object
};

export default PricingOption;