import React from 'react';
import { TextArea, Form } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Text Area',
  Component: TextArea,
  argTypes: {
    onChange: {
      action: 'Text Area changed',
    },
    onInput: {
      action: 'Input entered',
    },
    placeholder: {
      description: 'placeholder text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    rows: {
      description: 'indicates row count for a TextArea',
      table: {
        type: { summary: 'integer' },
        defaultValue: { summary: 3 },
      },
    }
  },
};

const Template = (args) => (
  <Form>
    <Form.Field>
      <TextArea {...args}></TextArea>
    </Form.Field>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type here...',
  rows: 3,
};
