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

export const sxMuiComponents = {
  input: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "24px",
      fontSize: "14px",
      height: "40px",
      padding: 0,
      "& fieldset": {
        borderColor: "#adb8cb",
      },
      "&:hover fieldset": {
        borderColor: "#adb8cb",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#adb8cb",
      },
    },
    "& input": {
      padding: "10px 12px",
    },
  },
  textarea: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "24px",
      fontSize: "14px",
      "& fieldset": {
        borderColor: "#adb8cb",
      },
      "&:hover fieldset": {
        borderColor: "#adb8cb",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#adb8cb",
      },
    },
  },
  select: {
    height: "40px",
    borderRadius: "24px",
    fontSize: "14px",
    padding: "0px",
    cursor: "pointer",
    "& .MuiSelect-select": {
      padding: "10px 12px",
      display: "flex",
      alignItems: "center",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#adb8cb",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#adb8cb",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#adb8cb",
    },
  },
  date: {
    "& .MuiOutlinedInput-root": {
      padding: "10px 12px",
      borderRadius: "24px",
      height: 40,
      width: "50%",
      fontSize: 14,
      outline: "none",
      backgroundColor: "#fff",
      "& fieldset": {
        borderColor: "#adb8cb",
      },
      "&:hover fieldset": {
        borderColor: "#adb8cb",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#adb8cb",
      },
    },
    "& .MuiInputBase-input": {
      padding: 0,
    },
    "& .MuiInputLabel-root": {
      top: "-5px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "18px",
      color: "#ADB8CB",
    },
  },
};
