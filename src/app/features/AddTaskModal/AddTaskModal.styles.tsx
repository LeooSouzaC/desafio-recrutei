"use client";

import styled from "styled-components";

export const AddTaskModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
`;

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  & span {
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -2%;
    color: #747f93;
  }
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #adb8cb;
  border-radius: 24px;
  font-size: 14px;
  height: 40px;
  outline: none;
`;

export const TextArea = styled.textarea`
  padding: 12px 12px;
  border: 1px solid #adb8cb;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  resize: none;
  min-height: 100px;
  transition: border 0.2s ease;
`;

export const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #adb8cb;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  background-image: url("data:image/svg+xml,%3Csvg fill='gray' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  appearance: none;
  cursor: pointer;
  height: 40px;

  option {
    padding-top: 32px;
  }
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #adb8cb;
  border-radius: 24px;
  outline: none;
  height: 40px;
  width: 50%;
  margin-bottom: 16px;

  appearance: none;
  -webkit-appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg fill='gray' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 18px;

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    cursor: pointer;
  }
`;
