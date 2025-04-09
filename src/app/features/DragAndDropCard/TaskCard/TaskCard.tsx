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
  FlagWrapper,
  WrapperCheckIcon,
} from "./TaskCard.styles";
import { kanbanStore } from "@/stores/kanban/kanban.store";
import { Bookmark, CheckCircleOutline } from "@mui/icons-material";

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
  const { columns, setOpenDetailModal } = kanbanStore();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isCompletedStage =
    !!columns
      ?.find((e) => e?.id === "completed")
      ?.tasks?.find((c) => c?.id === task?.id) || false;

  return (
    <CardContainer
      isCompleted={isCompletedStage}
      ref={setNodeRef}
      style={style}
      // {...attributes}
      // {...listeners}  https://github.com/clauderic/dnd-kit/issues/800
      onClick={() => {
        console.log("click");
        setOpenDetailModal(true);
      }}
    >
      {isCompletedStage && (
        <FlagWrapper>
          <Bookmark />
          <WrapperCheckIcon>
            <CheckCircleOutline sx={{ fontSize: 12 }} />
          </WrapperCheckIcon>
        </FlagWrapper>
      )}
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
