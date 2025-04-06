"use client";

import { styled } from "styled-components";

export const ColumnContainer = styled.div`
  min-height: 300px;
  min-width: 328px;
  flex: 0 0 25%;
`;

export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const ColumnTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -2%;
`;

export const ColumnSubtitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #747f93;
`;
