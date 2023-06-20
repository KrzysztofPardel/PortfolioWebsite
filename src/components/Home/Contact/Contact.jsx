'use client';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import Lottie from 'lottie-react';
// import sendMessage from '../../../../public/assets/sendMessage.json';
import './Contact.scss';
import { userSchema } from './Validations/NameValidation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
	const form = useRef();
	const [showInformation, setShowInformation] = useState(false);

	//handling confirmation information
	const showConfirmation = () => {
		setShowInformation(!showInformation);

		setTimeout(function () {
			setShowInformation(!showInformation);
		}, 3000);
	};

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	// Handling helper texts and reset of the inputs
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(userSchema),
	});

	// sending email through Email.js
	const onSubmit = (data) => {
		emailjs
			.sendForm('service_be58b1t', 'template_vqos45m', form.current, '7ZBJB5X4YZcVd9q9X')
			.then((result) => {
				console.log(result.text);
				reset();
				showConfirmation();
			})
			.catch((error) => {
				console.log(error.text);
			});
	};

	// email function
	// const sendEmail = (e) => {
	// 	if (e) {
	// 		e.preventDefault();
	// 	}
	// 	emailjs.sendForm('service_be58b1t', 'template_vqos45m', form.current, '7ZBJB5X4YZcVd9q9X').then(
	// 		(result) => {
	// 			console.log(result.text);

	// 		},
	// 		(error) => {
	// 			console.log(error.text);
	// 		}
	// 	);
	// };
	// // calling errors in helper texts
	// const {
	// 	handleSubmit,
	// 	control,
	// 	formState: { errors, dirtyFields },
	// } = useForm({
	// 	resolver: yupResolver(userSchema),
	// });
	// const onSubmit = async (data, e) => {
	// 	e.preventDefault();
	// 	console.log(data);
	// 	await sendEmail();
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
					<form ref={form} onSubmit={handleSubmit(onSubmit)} className='form'>
						<Controller
							name='name'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<>
									<input {...field} type='text' className='input' placeholder='Name' />
									{errors.name && <p className='form-error'>{errors.name.message}</p>}
								</>
							)}
						/>
						<Controller
							name='email'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<>
									<input {...field} type='email' className='input' placeholder='Email' />
									{errors.email && <p className='form-error'>{errors.email.message}</p>}
								</>
							)}
						/>
						<Controller
							name='message'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<>
									<textarea {...field} className='textarea' placeholder='Message' />
									{errors.message && <p className='form-error'>{errors.message.message}</p>}
								</>
							)}
						/>
						<input type='submit' className='submit' />
						<p className={showInformation ? 'form-message_sent' : 'form-message_sent invisible'}>
							I received your message. I will reach out to you very soon!{' '}
							<span className='form-message_sent_span'>Thank you.</span>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};
export default Contact;
