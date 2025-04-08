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

export const PaginationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
`;

export const BoardContainer = styled.div`
  grid-column: 2 / 13;

  display: flex;
  gap: 16px;
  height: 100vh;
  overflow: auto;
`;
