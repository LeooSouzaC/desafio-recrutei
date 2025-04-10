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
import { useEffect } from "react";
import { getDeadlineStatus } from "@/utils/getDeadlineStatus";
import dayjs from "dayjs";
import LoadingTaskDetail from "./Loading";

function TaskDetailModal() {
  const {
    openDetailModal,
    setOpenDetailModal,
    fetchTaskDetail,
    loadingTaskDetail,
    taskDetail,
  } = kanbanStore();

  const formattedDate = dayjs(taskDetail?.date).format("DD/MM");
  const deadlineStatus = getDeadlineStatus({
    dateString: dayjs(taskDetail?.date),
  });

  useEffect(() => {
    if (openDetailModal) {
      fetchTaskDetail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDetailModal]);

  return (
    <Modal
      width="450px"
      isOpen={openDetailModal}
      onClose={() => {
        setOpenDetailModal(false);
      }}
    >
      {loadingTaskDetail ? (
        <LoadingTaskDetail />
      ) : (
        <ModalContainer>
          <ModalHeader>
            <div>
              <ModalTitle>{taskDetail?.title}</ModalTitle>
              <ModalSubtitle>
                Responsáveis: {taskDetail?.responsible?.join(", ")}
              </ModalSubtitle>
            </div>

            <DateArea>
              <DeadlineAlert color={deadlineStatus?.color}>
                {deadlineStatus?.text}
              </DeadlineAlert>
              <Date>{formattedDate}</Date>
            </DateArea>
          </ModalHeader>

          <Description>{taskDetail?.description}</Description>
        </ModalContainer>
      )}
    </Modal>
  );
}

export default TaskDetailModal;
