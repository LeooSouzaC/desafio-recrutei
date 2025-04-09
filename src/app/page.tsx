import AddTaskModal from "./features/AddTaskModal";
import KanbanBoard from "./features/DragAndDropCard";
import Header from "./features/Header";
import TaskDetailModal from "./features/TaskDetailModal";

export default function Home() {
  return (
    <>
      <Header />

      <KanbanBoard />
      <AddTaskModal />
      <TaskDetailModal />
    </>
  );
}
