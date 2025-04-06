"use client";

import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(110, 110, 110, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: relative;
  background: white;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  width: 42px;
  height: 42px;
  top: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #747f93;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;
