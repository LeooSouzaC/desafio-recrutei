"use client";

import Image from "next/image";
import {
  HeaderContent,
  HeaderTitle,
  HeaderWrapper,
  WrapperAddTaskButton,
  WrapperLogo,
} from "./Header.styles";
import Button from "@/components/Button";
import { kanbanStore } from "@/stores/kanban/kanban.store";

function Header() {
  const { setOpenAddTaskModal } = kanbanStore();

  return (
    <HeaderWrapper>
      <HeaderContent>
        <WrapperLogo>
          <Image
            src="recrutei3.svg"
            width={31}
            height={31}
            alt="recrutei vector"
          />
        </WrapperLogo>
        <HeaderTitle>Teste vaga front</HeaderTitle>
      </HeaderContent>
      <WrapperAddTaskButton>
        <Button onClick={() => setOpenAddTaskModal(true)}>
          Adicionar tarefa
        </Button>
      </WrapperAddTaskButton>
    </HeaderWrapper>
  );
}

export default Header;
