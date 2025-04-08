"use client";

import Modal from "@/components/Modal";
import {
  AddTaskModalContent,
  ComponentContainer,
  DateInput,
  Input,
  ModalSubtitle,
  ModalTitle,
  Select,
  TextArea,
} from "./AddTaskModal.styles";
import Button from "@/components/Button";

function AddTaskModal() {
  return (
    <Modal isOpen onClose={() => {}}>
      <AddTaskModalContent>
        <div>
          <ModalTitle>Adicionar tarefa</ModalTitle>
          <ModalSubtitle>Preencha os detalhes da nova tarefa</ModalSubtitle>
        </div>

        <ComponentContainer>
          <span>Título da tarefa</span>
          <Input type="text" />
        </ComponentContainer>

        <ComponentContainer>
          <span>Descrição da tarefa</span>
          <TextArea name="" id=""></TextArea>
        </ComponentContainer>

        <ComponentContainer>
          <span>Responsáveis</span>
          <Select id="responsaveis">
            <option value="">Selecione...</option>
            <option value="ana">Ana</option>
            <option value="leo">Leonardo</option>
            <option value="joao">João</option>
          </Select>
        </ComponentContainer>

        <ComponentContainer>
          <span>Data limite</span>
          <DateInput type="date" placeholder="Data:" />
        </ComponentContainer>

        <Button onClick={() => {}}>Adicionar tarefa</Button>
      </AddTaskModalContent>
    </Modal>
  );
}

export default AddTaskModal;
