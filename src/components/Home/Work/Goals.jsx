'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Goals = () => {
	const steps = ['Learn Next', 'New project - Next.ts+ Supabase', 'MEng studies- beginning'];

	const [activeStep, setActiveStep] = useState(0);
	const [completed, setCompleted] = useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	return (
		<div id="goals" className="goals-container">
			<h1 className="goals-h">Goals</h1>
			<Box sx={{ width: '100%' }}>
				<Stepper nonLinear activeStep={activeStep} className="goals-stepper">
					{steps.map((label, index) => (
						<Step key={label} completed={completed[index]} className="goals-step">
							<StepButton className="goals-stepButton" color="inherit" onClick={handleStep(index)}>
								{label}
							</StepButton>
						</Step>
					))}
				</Stepper>
				<div>
					{allStepsCompleted() ? (
						<>
							<Typography className="" sx={{ mt: 2, mb: 1 }}>
								And just like that all of the upcoming goals will be completed!
							</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleReset}>Reset</Button>
							</Box>
						</>
					) : (
						<>
							<Typography sx={{ mt: 2, mb: 1, py: 1 }}>Goal {activeStep + 1}</Typography>
							<Box className="goals-buttons">
								<Button
									className="goals-button"
									color="inherit"
									disabled={activeStep === 0}
									onClick={handleBack}
									sx={{ mr: 1 }}
								>
									Back
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleNext} sx={{ mr: 1, color: '#ffff' }}>
									Next
								</Button>
							</Box>
						</>
					)}
				</div>
			</Box>
		</div>
	);
};

export default Goals;
