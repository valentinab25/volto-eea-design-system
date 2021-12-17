import React from 'react'
import { Icon, Label ,Form, Input} from 'semantic-ui-react'

export default {
    title: 'Components/Label',
    component: Label,
    argTypes:{
        pointing:{
            control:{type:'inline-radio'},
            options:[false,true,'below','left','right']
        },
        attached:{
            control:{type:'inline-radio'},
            options:[false,'top','bottom','top right','top left','bottom left','bottom right']
        }
    }
}


const Template = (args) => <Label {...args}></Label>;

export const Default = Template.bind({});
Default.args = {
    children: ["Label"],
}

export const Playground = Template.bind({});
Playground.args = {
    children: ["Label"],
    color: 'blue',
    pointing: true,
    tag:false,
    ribbon:false,
    floating:false,
    attached:''

}

export const Link = Template.bind({});
Link.args = {
    children: ["Label"],
    as: 'a',
    href: 'https://react.semantic-ui.com/elements/label/#types-basic',
    color: 'blue',
}

