import * as yup from 'yup';


export const userSchema = yup.object().shape({
	name: yup.string().required("Please enter your name"),
	email: yup.string().email().required("Please enter your email"),
	message: yup.string().min(5).required("Please enter your message"),
});
