"use client";

import Modal from "@/components/Modal";
import { kanbanStore } from "@/stores/kanban/kanban.store";
import {
  ModalContainer,
  ModalHeader,
  ModalSubtitle,
  ModalTitle,
  Date,
  DateArea,
  DeadlineAlert,
  Description,
} from "./TaskDetailModal.styles";

function TaskDetailModal() {
  const { openDetailModal, setOpenDetailModal } = kanbanStore();

  return (
    <Modal
      isOpen={openDetailModal}
      onClose={() => {
        setOpenDetailModal(false);
      }}
    >
      <ModalContainer>
        <ModalHeader>
          <div>
            <ModalTitle>Desenvolvimento de Protótipo</ModalTitle>
            <ModalSubtitle>
              Responsáveis: Matheus Gomes, Pedro Paulo e Paulo
            </ModalSubtitle>
          </div>

          <DateArea>
            <DeadlineAlert>Faltam 5 dias</DeadlineAlert>
            <Date>26/07</Date>
          </DateArea>
        </ModalHeader>

        <Description>
          Criar um protótipo funcional da nova funcionalidade do produto para
          apresentação aos stakeholders é uma tarefa crucial que requer atenção
          aos detalhes e uma execução precisa. O protótipo deve incluir todas as
          funcionalidades essenciais que demonstram claramente o valor agregado
          e a inovação que a nova funcionalidade traz para o produto. Além
          disso, é importante que o protótipo seja intuitivo e fácil de
          entender, permitindo que os stakeholders visualizem como a
          funcionalidade será integrada no produto final. A apresentação deve
          ser bem estruturada, destacando os principais benefícios e mostrando
          exemplos práticos de uso. A preparação adequada e a prática da
          apresentação também são essenciais para garantir que todas as
          perguntas dos stakeholders sejam respondidas de maneira eficaz. Este
          processo não só facilita a compreensão da nova funcionalidade, mas
          também ajuda a obter o feedback necessário para ajustes e melhorias
          antes do lançamento oficial.
        </Description>
      </ModalContainer>
    </Modal>
  );
}

export default TaskDetailModal;
