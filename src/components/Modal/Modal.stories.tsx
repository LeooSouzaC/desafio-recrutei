import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import React from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      defaultValue: true,
    },
    onClose: {
      action: "fechou",
    },
    width: {
      control: "text",
      defaultValue: "400px",
    },
    children: {
      control: "text",
      defaultValue: "Conteúdo do Modal",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: <div>Conteúdo do Modal</div>,
  },
};
