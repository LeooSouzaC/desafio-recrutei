"use client";

import styled from "styled-components";

export const KanbanContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const BoardContainer = styled.div`
  grid-column: 2 / 13;

  display: flex;
  gap: 16px;
  height: 100vh;
  overflow: auto;
`;
