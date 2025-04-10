"use client";

import styled from "styled-components";

interface CardContainerProps {
  isCompleted: boolean;
}

export const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isCompleted",
})<CardContainerProps>`
  background-color: #fff;
  padding: 16px;
  border-radius: 24px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 14px 0px rgba(189, 209, 223, 0.3);
  cursor: grab;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: ${({ isCompleted }) => (isCompleted ? "1px solid #63B150" : "none")};
  position: relative;

  &:active {
    cursor: grabbing;
  }
`;

export const FlagWrapper = styled.div`
  position: absolute;
  top: -8px;
  left: 12px;
  color: #63b150;
`;

export const WrapperCheckIcon = styled.div`
  position: absolute;
  color: white;
  bottom: 8px;
  left: 6px;
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

interface IDeadlineAlertProps {
  color: string;
}

export const DeadlineAlert = styled.span<IDeadlineAlertProps>`
  color: ${({ color }) => color};
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
