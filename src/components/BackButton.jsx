import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1); // Navigate back one step in the history stack
      }}
    >
      &larr; Back
    </Button>
  );
}
