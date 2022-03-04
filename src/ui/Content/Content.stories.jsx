import React, { useState } from 'react';
import Content from './Content';
import Tags from '../Tags/Tags';
import { Accordion, Button, Icon } from 'semantic-ui-react';

const CONTENT = `
Elit suspendisse a viverra consequat euismod. Leo ultricies enim pharetra viverra mi cursus lobortis nisl, ornare. Eu imperdiet tincidunt fames commodo. Sit mauris blandit ultrices magnis cras odio consequat, eu. Nibh est massa arcu sollicitudin.
Vitae et ac turpis pharetra. Sit feugiat porta risus sit risus etiam. Dignissim tincidunt aliquet diam fermentum vitae egestas duis. Erat sit pellentesque in urna nibh pulvinar. Cras sed vel purus et. Donec turpis pulvinar duis aenean urna.
Et vestibulum sociis mauris sit. Molestie tortor rutrum adipiscing rhoncus vehicula nunc. Quis sem a vel egestas posuere erat. Odio nulla blandit suspendisse pulvinar quis commodo etiam. Non vitae, felis enim velit amet. 
Aliquam dignissim eget feugiat donec fringilla consequat sed. Sollicitudin habitasse varius bibendum integer integer. Porttitor tincidunt varius augue auctor elit. Lacus ut commodo turpis ultrices magna vitae scelerisque pellentesque. 
Pretium faucibus egestas sit at cras bibendum natoque et. Est pulvinar eget ornare amet morbi massa ut at auctor. Eu sit aliquet pharetra neque, blandit nam enim eget. Integer sapien, varius ut volutpat mi risus purus in eget. 
Vitae, ultrices nunc justo, molestie. Eu sit nunc condimentum habitant facilisis porttitor.
`;

export default {
  title: 'Components/Content',
  component: Content,
  argTypes: {
    content: {
      name: 'content',
      description: 'This is the FAQ Answer',
      type: { name: 'string', required: true },
    },
    tag: {
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

export const Default = (args) => <Content>{args.content}</Content>;

Default.args = {
  content: CONTENT,
};

function AccordionContainer({ ...args }) {
  const [activeIndex, setActiveIndex] = useState();

  const toggleOpenAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={toggleOpenAccordion}
      >
        {args.toggle}
        <Icon name="chevron down" />
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <Content>
          <Content.Info>
            {args.date}
            <Content.Languages {...args.languageOptions}></Content.Languages>
          </Content.Info>
          <Content.Content>{args.content}</Content.Content>
          <Content.Actions>
            <Tags className="left">
              <Tags.Title>{args.tagTitle}</Tags.Title>
              <Tags.Tag className={args.tag.class} href={args.tag.href}>
                {args.tag.category}
              </Tags.Tag>
            </Tags>
            <Button>
              <Icon name="download"></Icon>
            </Button>
            <Button>
              <Icon name="share alternate"></Icon>
            </Button>
          </Content.Actions>
        </Content>
      </Accordion.Content>
    </Accordion>
  );
}

const AccordionTemplate = (args) => (
  <AccordionContainer {...args}></AccordionContainer>
);

export const FAQContent = AccordionTemplate.bind({});

FAQContent.args = {
  date: '21 SEP 2020',
  tagTitle: 'Tags',
  tag: { category: '# land use', href: '#', class: 'teal' },
  toggle: 'What is soil sealing and why is it important to monitor it?',
  content: CONTENT,
  languageOptions: {
    default: 'en',
    languages: [
      { text: 'Albanian', key: 'sq' },
      { text: 'Български', key: 'bg' },
      { text: 'Bosnian', key: 'bs' },
      { text: 'čeština', key: 'cs' },
      { text: 'Hrvatski', key: 'hr' },
      { text: 'dansk', key: 'da' },
      { text: 'Nederlands', key: 'nl' },
      { text: 'ελληνικά', key: 'el' },
      { text: 'English', key: 'en' },
      { text: 'eesti', key: 'et' },
      { text: 'Suomi', key: 'fi' },
      { text: 'Français', key: 'fr' },
      { text: 'Deutsch', key: 'de' },
      { text: 'magyar', key: 'hu' },
      { text: 'Íslenska', key: 'is' },
      { text: 'italiano', key: 'it' },
      { text: 'Latviešu', key: 'lv' },
      { text: 'lietuvių', key: 'lt' },
      { text: 'Macedonian', key: 'mk' },
      { text: 'Malti', key: 'mt' },
      { text: 'Norsk', key: 'no' },
      { text: 'polski', key: 'pl' },
      { text: 'Português', key: 'pt' },
      { text: 'Română', key: 'ro' },
    ],
  },
};
