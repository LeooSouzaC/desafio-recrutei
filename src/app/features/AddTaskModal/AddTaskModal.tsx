"use client";

import Modal from "@/components/Modal";
import {
  AddTaskModalContent,
  ComponentContainer,
  ModalSubtitle,
  ModalTitle,
  sxMuiComponents,
} from "./AddTaskModal.styles";
import Button from "@/components/Button";
import { kanbanStore } from "@/stores/kanban/kanban.store";
import { MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useState } from "react";

function AddTaskModal() {
  const {
    setOpenAddTaskModal,
    openAddTaskModal,
    taskParams,
    setTaskParams,
    setColumns,
    columns,
    resetTaskParams,
  } = kanbanStore();
  const [validParams, setValidParams] = useState(false);

  const handleClose = () => {
    setOpenAddTaskModal(false);
    setValidParams(false);
  };

  const handleAddTask = () => {
    if (
      !taskParams?.title ||
      !taskParams?.description ||
      taskParams?.responsibles?.length === 0 ||
      !taskParams?.deadline
    ) {
      setValidParams(true);
      return;
    }
    const data = {
      id: crypto.randomUUID(),
      title: taskParams?.title,
      description: taskParams?.description,
      responsibles: taskParams?.responsibles,
      deadline: taskParams?.deadline,
    };

    const newColumns = columns?.map((column) => {
      if (column?.id === "ideas") {
        return {
          ...column,
          tasks: [...column.tasks, data],
        };
      } else {
        return column;
      }
    });

    setColumns(newColumns);
    setOpenAddTaskModal(false);
    resetTaskParams();
  };

  return (
    <Modal isOpen={openAddTaskModal} onClose={handleClose}>
      <AddTaskModalContent>
        <div>
          <ModalTitle>Adicionar tarefa</ModalTitle>
          <ModalSubtitle>Preencha os detalhes da nova tarefa</ModalSubtitle>
        </div>

        <ComponentContainer>
          <span>Título da tarefa</span>
          <TextField
            variant="outlined"
            value={taskParams?.title}
            onChange={(e) => {
              setTaskParams({
                ...taskParams,
                title: e?.target?.value,
              });
            }}
            error={validParams && !taskParams?.title}
            sx={sxMuiComponents.input}
          />
        </ComponentContainer>

        <ComponentContainer>
          <span>Descrição da tarefa</span>
          <TextField
            variant="outlined"
            multiline
            minRows={4}
            value={taskParams?.description}
            onChange={(e) => {
              setTaskParams({
                ...taskParams,
                description: e?.target?.value,
              });
            }}
            error={validParams && !taskParams?.description}
            sx={sxMuiComponents.textarea}
          />
        </ComponentContainer>

        <ComponentContainer>
          <span>Responsáveis</span>
          <Select
            multiple
            value={taskParams?.responsibles}
            onChange={(e) => {
              setTaskParams({
                ...taskParams,
                responsibles: e?.target?.value as string[],
              });
            }}
            MenuProps={{
              disableScrollLock: true,
            }}
            error={validParams && taskParams.responsibles.length === 0}
            renderValue={(selected) => selected.join(", ")}
            sx={sxMuiComponents.select}
            variant="outlined"
          >
            <MenuItem value="Pedro">Pedro</MenuItem>
            <MenuItem value="Matheus">Matheus</MenuItem>
            <MenuItem value="Pedro Paulo">Pedro Paulo</MenuItem>
          </Select>
        </ComponentContainer>

        <ComponentContainer>
          <span>Data limite</span>

          <DatePicker
            slots={{
              openPickerIcon: CalendarMonthOutlinedIcon,
            }}
            sx={sxMuiComponents.date}
            value={taskParams?.deadline}
            onChange={(value) => {
              if (!value) return;
              setTaskParams({
                ...taskParams,
                deadline: value,
              });
            }}
            slotProps={{
              textField: {
                error: validParams && !taskParams?.deadline,
              },
            }}
          />
        </ComponentContainer>

        <Button onClick={handleAddTask}>Adicionar tarefa</Button>
      </AddTaskModalContent>
    </Modal>
  );
}

export default AddTaskModal;
