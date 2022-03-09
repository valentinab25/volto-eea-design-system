import React from 'react';
import ReverseCard from './ReverseCard';
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/banner.png';
// eslint-disable-next-line import/no-unresolved

export default {
    title: 'Components/ReverseCard',
    component: ReverseCard,
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
    <ReverseCard {...args}>
        <ReverseCard.Title>{args.title}</ReverseCard.Title>
        <ReverseCard.Content>{args.content}</ReverseCard.Content>
    </ReverseCard>
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    title: 'Lorem ipsum',
    content: <div style={{ backgroundColor: '#C4C4C4', height: '100%', width: '100%' }}></div>,
};

export const ImageContent = DefaultTemplate.bind({});

ImageContent.args = {
    title: 'Lorem ipsum',
    content: <div style={{ height: '200px', backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}></div>,
};

export const TextContent = DefaultTemplate.bind({});

TextContent.args = {
    title: 'Lorem ipsum',
    content: 'Elit suspendisse a viverra consequat euismod. Leo ultricies enim pharetra viverra mi cursus lobortis nisl, ornare. Eu imperdiet tincidunt fames commodo. Sit mauris blandit ultrices magnis cras odio consequat, eu. Nibh est massa arcu sollicitudin.',
};


