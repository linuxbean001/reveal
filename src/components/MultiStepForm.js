import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Account Information',
  'Business Information',
  'Payment Information',
  'Start Ordering',
];

export default function MultiStepForm() {
  return (
    <Box sx={{ width: '90%'}}>
      <Stepper activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}



