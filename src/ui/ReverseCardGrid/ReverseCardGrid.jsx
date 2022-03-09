import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import ReverseCard from '../ReverseCard/ReverseCard';
import { Button } from 'semantic-ui-react';

ReverseCardGrid.propTypes = {
    title: PropTypes.string,
};

function ReverseCardGrid({ children, ...rest }) {
    return (
        <div className='eea reverse-card-grid'  {...rest}>
            {children}
        </div>
    );
}

ReverseCardGrid.Group = ({ children, ...rest }) => {
    let cards = rest.cards;
    
    return (
        <div className="reverse-card group">
            <Grid>
                <Grid.Row>
                    {cards.map((card) => (
                        <Grid.Column mobile={4} tablet={3} computer={2}>
                            <div className="card-wrapper">
                                <ReverseCard {...rest}>
                                    <ReverseCard.Title>{card.title}</ReverseCard.Title>
                                    <ReverseCard.Content>{card.content}</ReverseCard.Content>
                                </ReverseCard>
                            </div>
                        </Grid.Column>
                    ))}
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={10} >
                        <div className='button-wrapper'><Button secondary>{rest.buttonText}</Button></div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    );
};





export default ReverseCardGrid;
