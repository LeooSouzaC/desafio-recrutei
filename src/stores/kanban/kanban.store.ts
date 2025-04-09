import { create } from "zustand";
import { ITaskParams, KanbanStoreDto } from "./kanban.dto";

const initialColumns = [
  {
    id: "ideas",
    title: "Idéias",
    tasks: [
      {
        id: "1",
        title: "Pesquisa de Mercado",
        description:
          "Criar um protótipo funcional e detalhado da nova funcionalidade inovadora do produto para uma apresentação impactante...",
        deadline: "26/07",
        responsibles: ["Matheus Gomes", "Pedro Paulo", "Pedro"],
      },
    ],
  },
  {
    id: "to-do",
    title: "A Fazer",
    tasks: [
      {
        id: "2",
        title: "Desenvolvimento de Protótipo",
        description:
          "Criar um protótipo funcional e detalhado da nova funcionalidade inovadora do produto para uma apresentação impactante...",
        deadline: "26/07",
        responsibles: ["Matheus Gomes", "Pedro Paulo", "Pedro"],
      },
    ],
  },
  {
    id: "in-progress",
    title: "Fazendo",
    tasks: [
      {
        id: "3",
        title: "Implementação de API",
        description:
          "Criar um protótipo funcional e detalhado da nova funcionalidade inovadora do produto para uma apresentação impactante...",
        deadline: "26/07",
        responsibles: ["Matheus Gomes", "Pedro Paulo", "Pedro"],
      },
    ],
  },
  {
    id: "completed",
    title: "Feito",
    tasks: [
      {
        id: "4",
        title: "Teste de Usabilidade",
        description:
          "Criar um protótipo funcional e detalhado da nova funcionalidade inovadora do produto para uma apresentação impactante...",
        deadline: "26/07",
        responsibles: ["Matheus Gomes", "Pedro Paulo", "Pedro"],
      },
      {
        id: "5",
        title: "Teste de Usabilidade",
        description:
          "Criar um protótipo funcional e detalhado da nova funcionalidade inovadora do produto para uma apresentação impactante...",
        deadline: "26/07",
        responsibles: ["Matheus Gomes", "Pedro Paulo", "Pedro"],
      },
    ],
  },
];

export const kanbanStore = create<KanbanStoreDto>((set) => ({
  openAddTaskModal: false,
  columns: initialColumns,
  taskParams: {
    id: "",
    deadline: "",
    description: "",
    responsible: [],
    title: "",
  },
  pagination: "start",
  openDetailModal: false,

  setOpenAddTaskModal: (value: boolean) => set({ openAddTaskModal: value }),
  setColumns: (value) =>
    set((state) => ({
      columns: typeof value === "function" ? value(state.columns) : value,
    })),
  setTaskParams: (value: ITaskParams) => set({ taskParams: value }),
  setPagination: (value: "start" | "end") => set({ pagination: value }),
  setOpenDetailModal: (value: boolean) => set({ openDetailModal: value }),
}));
