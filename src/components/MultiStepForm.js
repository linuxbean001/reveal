import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Account Information",
  "Business Information",
  "Payment Information",
  "Start Ordering",
];

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(2);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };
  return (
    <Box sx={{ width: "90%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} onClick={() => handleStepClick(index)}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
