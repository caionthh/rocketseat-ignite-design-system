import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
    title: "Components/Text Input",
    component: TextInput.Root,
    args: {
        children: (
            <>
                <TextInput.Icon><Envelope /></TextInput.Icon>
                <TextInput.Input placeholder="Type email Address" />
            </>
        )
    },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: (
            <TextInput.Input placeholder="Type email Address" />
        )
    }
}