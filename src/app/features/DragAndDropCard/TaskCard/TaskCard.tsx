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
  StatusIcon,
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
      completed
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <StatusIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </StatusIcon>
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
