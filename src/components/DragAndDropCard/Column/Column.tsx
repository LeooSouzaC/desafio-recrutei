"use client";

import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import TaskCard from "../TaskCard";
import {
  ColumnContainer,
  ColumnHeader,
  ColumnSubtitle,
  ColumnTitle,
} from "./Column.styles";

type ColumnProps = {
  column: {
    id: string;
    title: string;
    tasks: {
      id: string;
      title: string;
    }[];
  };
};

function Column({ column }: ColumnProps) {
  const tasksQuantity = column?.tasks?.length || 0;
  const formattedSubtitle =
    tasksQuantity === 1
      ? `${tasksQuantity} tarefa`
      : `${tasksQuantity} tarefas`;

  return (
    <SortableContext
      id={column?.id}
      items={column?.tasks}
      strategy={rectSortingStrategy}
    >
      <ColumnContainer>
        <ColumnHeader>
          <ColumnTitle>{column.title}</ColumnTitle>
          {tasksQuantity > 0 && (
            <ColumnSubtitle>{formattedSubtitle}</ColumnSubtitle>
          )}
        </ColumnHeader>
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ColumnContainer>
    </SortableContext>
  );
}

export default Column;
