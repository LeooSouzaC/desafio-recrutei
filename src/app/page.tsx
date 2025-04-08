import AddTaskModal from "./features/AddTaskModal";
import KanbanBoard from "./features/DragAndDropCard";
import Header from "./features/Header";

export default function Home() {
  return (
    <>
      <Header />

      <KanbanBoard />
      {/* <AddTaskModal /> */}
    </>
  );
}
