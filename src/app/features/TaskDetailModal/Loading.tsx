"use client";
import { Skeleton } from "@mui/material";

export default function LoadingTaskDetail() {
  return (
    <div>
      <Skeleton height={100} width="100%" />
      <Skeleton height={250} width="100%" sx={{ mt: -8, mb: -4 }} />
    </div>
  );
}
