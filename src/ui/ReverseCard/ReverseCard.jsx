import React from 'react';
import PropTypes from 'prop-types';

ReverseCard.propTypes = {
    title: PropTypes.string,
};

function ReverseCard({ children, ...rest }) {
    return (
        <div className='eea reverse-card'  {...rest}>
            <div className="wrapper">
                {children}
            </div>
        </div>
    );
}

ReverseCard.Content = ({ children }) => {
    return <div className="content">{children}</div>;
};
ReverseCard.Title = ({ children }) => <p className="title">{children}</p>;


export default ReverseCard;
