import React from 'react';
import { List } from 'semantic-ui-react';

export default {
  title: 'Components/List/Unordered list',
  component: List,
  argTypes: {
    animated: {
      description:
        'a list can animate to set the current item apart from the list',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    divided: {
      description: 'a list can show divisions between conten',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    horizontal: {
      description: 'a list can be formatted to have items appear horizontally',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    items: {
      description: 'array of list content',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

function UnorderedList(animated, divided, horizontal, items) {
  return (
    <List
      bulleted
      animated={animated}
      divided={divided}
      horizontal={horizontal}
    >
      {items.map((item, index) => (
        <List.Item key={index}>
          {item.content}
          <List.List role="list">
            {item.subList.map((sub, subIndex) => (
              <List.Item key={subIndex} as="a" role="listitem">
                {sub.content}
              </List.Item>
            ))}
          </List.List>
        </List.Item>
      ))}
    </List>
  );
}

export const Default = (args) => {
  return UnorderedList(
    args.animated,
    args.divided,
    args.horizontal,
    args.items,
  );
};

Default.args = {
  animated: false,
  divided: false,
  horizontal: false,
  items: [
    {
      header: 'header 1',
      content: 'Content 1',
      subList: [
        { header: 'Sub header 1', content: 'content' },
        { header: 'Sub header ', content: 'content' },
      ],
    },
    {
      header: 'header 2',
      content: 'Content 2',
      subList: [
        { header: 'Sub header 1', content: 'content' },
        { header: 'Sub header ', content: 'content' },
      ],
    },
    {
      header: 'header 3',
      content: 'Content 3',
      subList: [
        { header: 'Sub header 1', content: 'content' },
        { header: 'Sub header ', content: 'content' },
      ],
    },
    {
      header: 'header 4',
      content: 'Content 4',
      subList: [
        { header: 'Sub header 1', content: 'content' },
        { header: 'Sub header ', content: 'content' },
      ],
    },
  ],
};
