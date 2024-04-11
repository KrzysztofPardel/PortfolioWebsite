'use client';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './Contact.scss';
import { userSchema } from './Validations/NameValidation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import connect2 from '../../../../public/assets/connect2.jpg';

export const Contact = () => {
	const form = useRef();
	const [showInformation, setShowInformation] = useState(false);
	//handling confirmation information
	const showConfirmation = () => {
		setShowInformation(!showInformation);
		setTimeout(() => {
			setShowInformation((prevShowInformation) => !prevShowInformation);
		}, 5000);
	};

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
	const onSubmit = () => {
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

	return (
		<>
			<div id="contact" className="container">
				<div className="section-rectangle ">
					<p className="section-title">Contact</p>
				</div>
				<div className="container-contact_form">
					<div className="contact_form_small_cont">
						<h2 className="contact_form_title">
							Let&apos;s connect and <span className="contact_form_title_span">develop</span> something{' '}
							<span className="contact_form_title_span">valueable</span> together!
						</h2>
						<Image src={connect2} alt="lets connect image" className="contact_form_img" />
					</div>
					<div className="line" />
					<form ref={form} onSubmit={handleSubmit(onSubmit)} className="form">
						<Controller
							name="name"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<>
									<input {...field} type="text" className="input" placeholder="Name" />
									{errors.name && <p className="form-error">{errors.name.message}</p>}
								</>
							)}
						/>
						<Controller
							name="email"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<>
									<input {...field} type="email" className="input" placeholder="Email" />
									{errors.email && <p className="form-error">{errors.email.message}</p>}
								</>
							)}
						/>
						<Controller
							name="message"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<>
									<textarea {...field} className="textarea" placeholder="Message" />
									{errors.message && <p className="form-error">{errors.message.message}</p>}
								</>
							)}
						/>
						<input type="submit" className="submit" />
						<p className={showInformation ? 'form-message_sent' : 'form-message_sent invisible'}>
							I received your message. I will reach out to you very soon!
							<span className="form-message_sent_span">Thank you.</span>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};
export default Contact;
