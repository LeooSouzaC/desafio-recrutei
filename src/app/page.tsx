import KanbanRegistry from "@/lib/kanbanRegistry";
import AddTaskModal from "./features/AddTaskModal";
import Header from "./features/Header";
import TaskDetailModal from "./features/TaskDetailModal";

export default function Home() {
  return (
    <>
      <Header />
      <KanbanRegistry />
      <AddTaskModal />
      <TaskDetailModal />
    </>
  );
}
