import React from 'react';
import Tags from './Tags';

export default {
  title: 'Components/Tags',
  component: Tags,
  argTypes: {
    title: {
      name: 'title',
      description: 'Tags main text',
      type: { name: 'string', required: true },
    },
    direction: {
      control: { type: 'select' },
      options: ['right', 'left'],
      description: 'tags container direction',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'right',
        },
      },
    },
    tags: {
      description: 'category tags',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

export const Default = (args) => (
  <Tags className={args.direction}>
    <Tags.Title>{args.title}</Tags.Title>
    {args.tags.map((tag, index, tags) => [
      <Tags.Tag className={tag.class} href={tag.href}>
        {tag.category}
      </Tags.Tag>,
    ])}
  </Tags>
);

Default.args = {
  title: 'tags',
  direction: 'right',
  tags: [
    { category: 'subcategory1', href: '#', class: '' },
    { category: 'subcategory2', href: '#', class: 'teal' },
    { category: 'subcategory3', href: '#', class: 'blue-dark' },
    { category: 'subcategory4', href: '#', class: 'blue-light' },
  ],
};