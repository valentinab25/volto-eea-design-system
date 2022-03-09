import React from 'react';
import ReverseCardGrid from './ReverseCardGrid';
// eslint-disable-next-line import/no-unresolved

export default {
    title: 'Components/ReverseCardGrid',
    component: ReverseCardGrid,
    argTypes: {
        title: {
            description: 'reverse card title',
            table: {
                defaultValue: { summary: '""' },
                type: { summary: 'string' },
            },
        },
        content: {
            description: 'Reverse Card content',
        }
    },
};

const DefaultTemplate = (args) => (
    <ReverseCardGrid {...args}>
        <ReverseCardGrid.Group cards={args.cards}></ReverseCardGrid.Group>
    </ReverseCardGrid>
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    title: 'Lorem ipsum',
    cards: [
        {
            title: 'Lorem ipsum',
            content: <div style={{ backgroundColor: '#C4C4C4', height: '100%', width: '100%' }}></div>,
        },
        {
            title: 'Lorem ipsum',
            content: <div style={{ backgroundColor: '#C4C4C4', height: '100%', width: '100%' }}></div>,
        },
        {
            title: 'Lorem ipsum',
            content: <div style={{ backgroundColor: '#C4C4C4', height: '100%', width: '100%' }}></div>,
        },
        {
            title: 'Lorem ipsum',
            content: <div style={{ backgroundColor: '#C4C4C4', height: '100%', width: '100%' }}></div>,
        },
        {
            title: 'Lorem ipsum',
            content: <div style={{ backgroundColor: '#C4C4C4', height: '100%', width: '100%' }}></div>,
        },
        {
            title: 'Lorem ipsum',
            content: <div style={{ backgroundColor: '#C4C4C4', height: '100%', width: '100%' }}></div>,
        },
    ],

};




