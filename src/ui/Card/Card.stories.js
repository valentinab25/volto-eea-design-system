import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/avatar.png';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    hasImage: {
      description: 'true if card contains image',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
      },
    },
    title: {
      description: 'card header',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: ' "" ' },
      },
    },
    meta: {
      description: 'card meta data',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: ' "" ' },
      },
    },
    description: {
      description: 'card main content',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: ' "" ' },
      },
    },
    fluid: {
      description: 'take up the width of its container',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
    },
    links: {
      description: 'array with links to other content',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: { summary: ' "" ' },
      },
    },
    avatarVariant: {
      options: ['big', 'small'],
      control: { type: 'inline-radio' },
      defaultValue: 'big' ,
    },
  },
};

const Template = (args) => (
  <Card fluid={args.fluid}>
    {args.hasImage && (
      <Image
        src="https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large"
        wrapped
        ui={false}
        alt="card image"
      />
    )}
    <Card.Content>
      <Card.Header>{args.title}</Card.Header>
      <Card.Meta>{args.meta}</Card.Meta>
      <Card.Description>{args.description}</Card.Description>
    </Card.Content>
    {args.links !== null &&
      args.links.map((item, index) => (
        <Card.Content extra key={index}>
          <a href="/#">
            {' '}
            <Icon name={item.icon} />
            {item.linkName}
          </a>
        </Card.Content>
      ))}
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  //src: 'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
  title: 'Card Header',
  meta: 'meta data',
  description: 'card description',
  hasImage: true,
  fluid: false,
  links: [{ linkName: 'Link 1', icon: 'linkify' }],
};


const AvatarTemplate = (args) => (
  <Card className={`eea avatar ${args.avatarVariant}`} fluid={args.fluid}>
    <Image
      src={args.src}
      wrapped
      ui={false}
      alt="card image"
    />
    <Card.Content>
      <Card.Header>{args.title}</Card.Header>
      <Card.Description>{args.description}</Card.Description>
    </Card.Content>
  </Card>
);

export const Avatar = AvatarTemplate.bind({});
Avatar.args = {
  avatarVariant: ['big', 'small'],
  src: imgUrl,
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  hasImage: true,
  fluid: false
};
