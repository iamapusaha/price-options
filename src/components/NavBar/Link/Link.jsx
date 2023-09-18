import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (


        <li className='hover:bg-indigo-400 hover:text-white p-4'>
            <a href={route.path}>{route.name}</a>
        </li>

    );
};

Link.propTypes = {
    route: PropTypes.object
};

export default Link;