"use client";

import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import {
  ColumnContainer,
  ColumnHeader,
  ColumnSubtitle,
  ColumnTitle,
} from "./Column.styles";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "@/components/TaskCard";
import { IColumns } from "@/stores/kanban/kanban.dto";

interface ColumnProps {
  column: IColumns;
}

function Column({ column }: ColumnProps) {
  const { setNodeRef } = useDroppable({ id: column?.id });
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
      <ColumnContainer ref={setNodeRef}>
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
