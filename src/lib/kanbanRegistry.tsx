"use client";

import dynamic from "next/dynamic";

const KanbanBoard = dynamic(() => import("../app/features/DragAndDropCard"), {
  ssr: false,
});

export default function KanbanRegistry() {
  return <KanbanBoard />;
}
