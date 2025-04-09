export interface KanbanStoreDto {
  openAddTaskModal: boolean;
  columns: IColumns[];
  taskParams: ITaskParams;
  pagination: "start" | "end";
  openDetailModal: boolean;

  setColumns: (value: IColumns[] | ((prev: IColumns[]) => IColumns[])) => void;
  setOpenAddTaskModal: (value: boolean) => void;
  setTaskParams: (value: ITaskParams) => void;
  setPagination: (value: "start" | "end") => void;
  setOpenDetailModal: (value: boolean) => void;
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
  deadline: string;
  responsibles: string[];
}

export interface ITaskParams {
  id: string;
  title: string;
  description: string;
  deadline: string;
  responsible: string[];
}
