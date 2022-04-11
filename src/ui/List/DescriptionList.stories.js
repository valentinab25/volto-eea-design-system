import React from 'react';
import { List, Container } from 'semantic-ui-react';

export default {
  title: 'Components/List/Description list',
  component: List,
  argTypes: {
    floated: {
      control: {
        type: 'inline-radio',
      },
      options: ['left', 'right'],
      description: 'floated left or right',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
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
    items: {
      description: 'array of list content',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

function DescriptionList(items, floated, animated, divided) {
  return (
    <Container>
      <List animated={animated} divided={divided}>
        {items.map((item, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>{item.header}</List.Header>
              <List.Description floated={floated}>
                {item.content}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}

export const Default = (args) => {
  return DescriptionList(args.items, args.floated, args.animated, args.divided);
};

Default.args = {
  floated: 'right',
  animated: false,
  divided: false,
  items: [
    { header: 'Header 1', content: 'Description content 1' },
    { header: 'Header 2', content: 'Description content 2' },
    { header: 'Header 3', content: 'Description content 3' },
    { header: 'Header 4', content: 'Description content 4' },
  ],
};
