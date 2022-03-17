import React from 'react';
import PublicationCard from './PublicationCard';
import { Container } from 'semantic-ui-react';

const imageUrl =
  'https://www.eea.europa.eu/publications/eea-eionet-strategy-2021-2030/image_mini';

export default {
  title: 'Components/PublicationCard',
  component: PublicationCard,
  argTypes: {
    tag: {
      description: 'publication tags',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    description: {
      description: 'publication description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <PublicationCard {...args}>
      <PublicationCard.Header
        image_url={args.image ? imageUrl : null}
        image={args.image}
      />
      <PublicationCard.Info description={args.description} tag={args.tag} />
    </PublicationCard>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  tag: 'Publication',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
};

export const DefaultWithLongDescription = Template.bind({});
DefaultWithLongDescription.args = {
  tag: 'Publication',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. Eget tellus blandit aenean mattis. Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis. ',
};

export const PublicationCardWithImage = Template.bind({});
PublicationCardWithImage.args = {
  tag: 'Publication',
  description:
    'Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis.',
  image: true,
};
PublicationCardWithImage.argTypes = {
  image: {
    description: 'set or unset publication backgroung image',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};
