import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TaskCard, { TaskProps } from "./TaskCard";

import { kanbanStore } from "@/stores/kanban/kanban.store";
import dayjs from "dayjs";

const TaskCardWrapper = ({ task }: TaskProps) => {
  kanbanStore.setState({
    columns: [
      {
        id: task?.id === "1" ? "ideas" : "completed",
        title: task?.id === "1" ? "Idéias" : "Feito",
        tasks: task && [{ ...task }],
      },
    ],
    setOpenDetailModal: () => {},
  });

  return (
    <div style={{ width: "300px" }}>
      <TaskCard task={task} />
    </div>
  );
};

const meta: Meta<typeof TaskCardWrapper> = {
  title: "Components/TaskCard",
  component: TaskCardWrapper,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const TarefaAberta: StoryObj<typeof TaskCardWrapper> = {
  render: () => (
    <TaskCardWrapper
      task={{
        id: "1",
        title: "Estudar Styled Components",
        description: "Entender como aplicar temas",
        responsibles: ["Leonardo"],
        deadline: dayjs(),
      }}
    />
  ),
};

export const TarefaConcluidaDentroPrazo: StoryObj<typeof TaskCardWrapper> = {
  render: () => (
    <TaskCardWrapper
      task={{
        id: "2",
        title: "Finalizar Projeto Kanban",
        description: "Entregue a tempo",
        responsibles: ["Leonardo"],
        deadline: dayjs().add(1, "year"),
      }}
    />
  ),
};

export const TarefaConcluidaForaPrazo: StoryObj<typeof TaskCardWrapper> = {
  render: () => (
    <TaskCardWrapper
      task={{
        id: "3",
        title: "Atualizar documentação",
        description: "Foi concluída, mas passou do prazo",
        responsibles: ["Leonardo"],
        deadline: dayjs().subtract(15, "days"),
      }}
    />
  ),
};
