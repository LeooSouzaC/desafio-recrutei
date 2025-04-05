"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  CardContainer,
  CardSubtitle,
  CardTitle,
  DeadlineAlert,
  DeadlineArea,
  DeadlineDescription,
  ResponsibleChip,
  ResponsiblesArea,
} from "./TaskCard.styles";

export interface TaskProps {
  task: {
    id: string;
    title: string;
    description?: string;
    responsibles?: string[];
    deadline?: string;
  };
}

function TaskCard({ task }: TaskProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <CardContainer
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div>
        <CardTitle>{task.title}</CardTitle>
        <CardSubtitle>{task.description}</CardSubtitle>
      </div>
      <DeadlineArea>
        <DeadlineDescription>Data limite: {task.deadline}</DeadlineDescription>

        <DeadlineAlert>Faltam 10 dias</DeadlineAlert>
      </DeadlineArea>

      <ResponsiblesArea>
        {task?.responsibles?.map((responsible) => (
          <ResponsibleChip key={responsible}>{responsible}</ResponsibleChip>
        ))}
      </ResponsiblesArea>
    </CardContainer>
  );
}

export default TaskCard;
