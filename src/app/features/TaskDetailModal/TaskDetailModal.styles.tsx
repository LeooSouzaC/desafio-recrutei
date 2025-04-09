import { styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -2%;
  line-height: 100%;
`;

export const ModalSubtitle = styled.span`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -2%;
  line-height: 100%;
  color: #747f93;
`;

export const DateArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DeadlineAlert = styled.span`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: -2%;
  line-height: 100%;
  color: #ffa500;
`;

export const Date = styled.div`
  border: 1px dashed #333333;
  font-size: 10px;
  letter-spacing: -2%;
  line-height: 100%;
  font-weight: 400;
  border-radius: 8px;
  padding: 8px;
`;

export const Description = styled.div`
  padding: 16px 12px;
  background-color: #f1f3f6;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -2%;
  line-height: 100%;
  color: #747f93;
  border-radius: 12px;
`;
