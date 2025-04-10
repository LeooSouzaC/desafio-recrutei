import { Dayjs } from "dayjs";

export interface KanbanStoreDto {
  openAddTaskModal: boolean;
  columns: IColumns[];
  taskParams: ITaskParams;
  pagination: "start" | "end";
  openDetailModal: boolean;
  taskDetail: ITaskDetail | null;
  loadingTaskDetail: boolean;

  setColumns: (value: IColumns[] | ((prev: IColumns[]) => IColumns[])) => void;
  setOpenAddTaskModal: (value: boolean) => void;
  setTaskParams: (value: ITaskParams) => void;
  setPagination: (value: "start" | "end") => void;
  setOpenDetailModal: (value: boolean) => void;

  fetchTaskDetail: () => Promise<void>;
  resetTaskParams: () => void;
}

export interface IColumns {
  id: string;
  title: string;
  tasks: ITasks[];
}

export interface ITasks {
  id: string;
  title: string;
  description: string;
  deadline: Dayjs;
  responsibles: string[];
}

export interface ITaskParams {
  id: string;
  title: string;
  description: string;
  deadline: Dayjs;
  responsibles: string[];
}

export interface ITaskDetail {
  id: string;
  date: string;
  title: string;
  status: string;
  description: string;
  responsible: string[];
}
