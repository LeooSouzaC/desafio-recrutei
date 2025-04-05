"use client";

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 16px;
`;

export const HeaderContent = styled.div`
  grid-column: 2 / 12;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 12px;
  gap: 16px;
  border-radius: 16px;
  box-shadow: 0px 4px 14px 0px rgba(189, 209, 223, 0.3);
  margin-bottom: 2px;
`;

export const WrapperLogo = styled.div`
  background-color: #4169e1;
  padding: 8px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.span`
  color: #4169e1;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -2%;
  font-size: 12px;
`;

export const WrapperAddTaskButton = styled.div`
  padding: 8px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: white;
  grid-column: 6 / 8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
