"use client";

import { styled } from "styled-components";

interface CardContainerProps {
  completed: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  background-color: #fff;
  padding: 16px;
  border-radius: 24px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 14px 0px rgba(189, 209, 223, 0.3);
  cursor: grab;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: ${({ completed }) => (completed ? "1px solid #63B150" : "none")};
  position: relative;

  &:active {
    cursor: grabbing;
  }
`;

export const StatusIcon = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 24px;
  height: 50px;
  background-color: #4caf50;
  border-top-left-radius: 8px; // Usar MATERIAL ICONS
  border-top-right-radius: 8px;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 50%, 0 75%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const CardTitle = styled.h5`
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -2%;
  margin-bottom: 8px;
`;

export const CardSubtitle = styled.p`
  color: #747f93;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: -2%;
`;

export const DeadlineArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px dashed #747f93;
  border-radius: 12px;
`;

export const DeadlineDescription = styled.span`
  color: #747f93;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: -2%;
`;

export const DeadlineAlert = styled.span`
  color: #63b150;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: -2%;
`;

export const ResponsiblesArea = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ResponsibleChip = styled.div`
  background-color: #1e90ff;
  border-radius: 8px;
  padding: 8px;
  color: #fff;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: -2%;
`;
