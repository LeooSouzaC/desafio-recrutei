"use client";

import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Column from "./Column";
import {
  BoardContainer,
  KanbanContent,
  PaginationArea,
  PaginationButton,
} from "./DragAndDrop.styles";
import { kanbanStore } from "@/stores/kanban/kanban.store";
import { IColumns } from "@/stores/kanban/kanban.dto";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useEffect, useRef } from "react";

function KanbanBoard() {
  const { columns, setColumns, setPagination, pagination } = kanbanStore();
  const boardRef = useRef<HTMLDivElement>(null);

  const findColumn = (unique: string | null) => {
    if (!unique) {
      return null;
    }
    if (columns.some((c) => c.id === unique)) {
      return columns.find((c) => c.id === unique) ?? null;
    }
    const id = String(unique);
    const itemWithColumnId = columns.flatMap((c) => {
      const columnId = c.id;
      return c.tasks.map((i) => ({ itemId: i.id, columnId: columnId }));
    });
    const columnId = itemWithColumnId.find((i) => i.itemId === id)?.columnId;
    return columns.find((c) => c.id === columnId) ?? null;
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over, delta } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;

    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);

    if (!activeColumn || !overColumn || activeColumn === overColumn) {
      return;
    }

    setColumns((prevState: IColumns[]) => {
      const activeItems = activeColumn.tasks;
      const overItems = overColumn.tasks;

      const activeIndex = activeItems.findIndex((i) => i.id === activeId);

      const isOverColumn = overColumn.id === overId;
      const newIndex = () => {
        if (isOverColumn) return overItems.length;

        const overIndex = overItems.findIndex((i) => i.id === overId);
        const putOnBelowLastItem =
          overIndex === overItems.length - 1 && delta.y > 0;
        const modifier = putOnBelowLastItem ? 1 : 0;
        return overIndex >= 0 ? overIndex + modifier : overItems.length;
      };

      const movedItem = activeItems[activeIndex];

      return prevState.map((column) => {
        if (column.id === activeColumn.id) {
          return {
            ...column,
            tasks: column.tasks.filter((i) => i.id !== activeId),
          };
        }
        if (column.id === overColumn.id) {
          const newTasks = [...overItems];
          newTasks.splice(newIndex(), 0, movedItem);
          return { ...column, tasks: newTasks };
        }
        return column;
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);
    if (!activeColumn || !overColumn || activeColumn !== overColumn) {
      return null;
    }
    const activeIndex = activeColumn.tasks.findIndex((i) => i.id === activeId);
    const overIndex = overColumn.tasks.findIndex((i) => i.id === overId);
    if (activeIndex !== overIndex) {
      setColumns((prevState: IColumns[]) => {
        return prevState.map((column) => {
          if (column.id === activeColumn.id) {
            column.tasks = arrayMove(overColumn.tasks, activeIndex, overIndex);
            return column;
          } else {
            return column;
          }
        });
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    console.log("passou");
    if (!boardRef.current) return;

    const behavior: ScrollBehavior = "smooth";

    if (pagination === "start") {
      boardRef.current.scrollTo({ left: 0, behavior });
    } else if (pagination === "end") {
      boardRef.current.scrollTo({
        left: boardRef.current.scrollWidth,
        behavior,
      });
    }
  }, [pagination]);

  console.log(pagination);
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <KanbanContent>
        <PaginationArea>
          <PaginationButton
            onClick={() => setPagination("start")}
            isDisabled={pagination === "start"}
          >
            <KeyboardArrowLeft />
          </PaginationButton>
          <PaginationButton
            onClick={() => setPagination("end")}
            isDisabled={pagination === "end"}
          >
            <KeyboardArrowRight />
          </PaginationButton>
        </PaginationArea>
        <BoardContainer ref={boardRef}>
          {columns?.map((column) => (
            <Column key={column?.id} column={column} />
          ))}
        </BoardContainer>
      </KanbanContent>
    </DndContext>
  );
}

export default KanbanBoard;
