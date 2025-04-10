"use client";
import { create } from "zustand";
import { ITaskParams, KanbanStoreDto } from "./kanban.dto";
import dayjs from "dayjs";

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
        deadline: dayjs(),
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
        deadline: dayjs(),
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
        deadline: dayjs(),
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
        deadline: dayjs(),
        responsibles: ["Matheus Gomes", "Pedro Paulo", "Pedro"],
      },
      {
        id: "5",
        title: "Teste de Usabilidade",
        description:
          "Criar um protótipo funcional e detalhado da nova funcionalidade inovadora do produto para uma apresentação impactante...",
        deadline: dayjs(),
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
    deadline: dayjs(),
    description: "",
    responsibles: [],
    title: "",
  },
  pagination: "start",
  openDetailModal: false,
  taskDetail: null,
  loadingTaskDetail: false,

  setOpenAddTaskModal: (value: boolean) => set({ openAddTaskModal: value }),
  setColumns: (value) =>
    set((state) => ({
      columns: typeof value === "function" ? value(state.columns) : value,
    })),
  setTaskParams: (value: ITaskParams) => set({ taskParams: value }),
  setPagination: (value: "start" | "end") => set({ pagination: value }),
  setOpenDetailModal: (value: boolean) => set({ openDetailModal: value }),

  fetchTaskDetail: async () => {
    set({ loadingTaskDetail: true });
    try {
      const response = await fetch(
        "https://api.npoint.io/21c80c25ed65b6f3484f"
      );
      const result = await response.json();
      set({ taskDetail: result?.[0] });
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      set({ loadingTaskDetail: false });
    }
  },
  resetTaskParams: () => {
    set({
      taskParams: {
        id: "",
        deadline: dayjs(),
        description: "",
        responsibles: [],
        title: "",
      },
    });
  },
}));
