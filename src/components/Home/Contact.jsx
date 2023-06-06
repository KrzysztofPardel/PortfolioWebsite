'use client';
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import sendMessage from '../../../public/assets/sendMessage.json';
import './Contact.scss';
export const Contact = () => {
	return (
		<>
			<div id='contact' className='container-contact'>
				<div className='rectangle'>
					<p className='contact'>contact</p>
				</div>
				<div className='container-contact_form'>
					<div className='contact-animation'>
						<Lottie animationData={sendMessage} />
					</div>
					<div className='line' />
					<form className='form'>
						<input type='text' className='input ' placeholder='Name' />
						<input type='email' className='input' placeholder='Email' />
						<textarea type='text' className='textarea' placeholder='Message' />
					</form>
				</div>
			</div>
		</>
	);
};
export default Contact;
