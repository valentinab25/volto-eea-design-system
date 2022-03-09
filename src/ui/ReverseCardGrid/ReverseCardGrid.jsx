import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import ReverseCard from '../ReverseCard/ReverseCard';
import { Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    if (width >= 835) {
        return 5;
    }
    if (width < 835 && width > 320) {
        return 4
    } else {
        return 3
    }
}

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
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let cards = rest.cards;
    let viewPort = windowDimensions;
    let button = false;
    if (rest.cards.length > viewPort) {
        cards = cards.slice(0, viewPort);
        button = true;
    }
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
                        {button && <div className='button-wrapper'><Button secondary >See All</Button></div>}
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    );
};





export default ReverseCardGrid;
