'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import Lottie from 'lottie-react';
// import sendMessage from '../../../../public/assets/sendMessage.json';
import './Contact.scss';
import { userSchema } from './Validations/NameValidation';

export const Contact = () => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(userSchema),
	});
	const sendMessage = (data) => {
		console.log(data);
	};
	// const sendMessage = async (event) => {
	// 	event.preventDefault();
	// 	let formData = {
	// 		name: event.target[0].value,
	// 		email: event.target[1].value,
	// 		message: event.target[2].value,
	// 	};
	// 	const isValid = await userSchema.isValid(formData);
	// 	console.log(isValid);
	// };

	return (
		<>
			<div id='contact' className='container-contact'>
				<div className='section-rectangle '>
					<p className='section-title'>Contact</p>
				</div>
				<div className='container-contact_form'>
					<div className='contact-animation'>{/* <Lottie animationData={sendMessage} /> */}</div>
					<div className='line' />
					<form onSubmit={handleSubmit(sendMessage)} className='form' ref={register}>
						<input type='text' name='firstName' className='input ' placeholder='Name' ref={register} />
						<p className=''>{errors.firstName?.message}</p>
						<input type='email' name='email' className='input' placeholder='Email' ref={register} />
						<p className=''>{errors.email?.message}</p>
						<textarea type='text' name='message' className='textarea' placeholder='Message' ref={register} />
						<p className=''>{errors.message?.message}</p>
						<input type='submit' className='submit' />
					</form>
				</div>
			</div>
		</>
	);
};
export default Contact;
