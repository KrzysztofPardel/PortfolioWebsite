import * as yup from 'yup';

export const userSchema = yup.object().shape({
	name: yup.string().min(2, 'First name must be at least 3 characters long').required('Please enter your name'),
	email: yup.string().email('Please enter a valid email').required('Please enter your email'),
	message: yup.string().min(5, 'Message must be at least 5 characters long').required('Please enter your message'),
});
