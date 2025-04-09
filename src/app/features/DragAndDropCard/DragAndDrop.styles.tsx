"use client";

import styled from "styled-components";

export const KanbanContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const PaginationArea = styled.div`
  grid-column: 11 / 12;
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 8px 0px;
  gap: 8px;
`;

interface IPagination {
  isDisabled: boolean;
}

export const PaginationButton = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDisabled",
})<IPagination>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  padding: 12px 24px;
  background-color: ${({ isDisabled }) => (isDisabled ? "#ADB8CB33" : "white")};
  border-radius: 50%;
  color: #adb8cb;
  cursor: pointer;
  box-shadow: ${({ isDisabled }) =>
    isDisabled ? "none" : "0px 4px 14px 0px rgba(189, 209, 223, 0.3)"};
`;

export const BoardContainer = styled.div`
  grid-column: 2 / 13;

  display: flex;
  gap: 16px;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
`;
