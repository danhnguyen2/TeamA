import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import './Contact.css';
import apiKey from '../../emailkey';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init('user_xhQE8RcVRRuqKv43qLfqB');

const Contact = () => {
	const [thankYou, setThankYou] = useState(false);
	const [initalState, setInitialState] = useState(true);
	const [apiCalling, setApiCalling] = useState(false);

	const [feedback, setFeedback] = useState('');
	const [email, setEmail] = useState('');
	const submitHandler = (e) => {
		e.preventDefault(); // Prevents default refresh by the browser
		setInitialState(false);
		setApiCalling(true);
		emailjs
			.send(
				apiKey.SERVICE_ID,
				apiKey.TEMPLATE_ID,
				{ name: email, input: feedback },
				apiKey.USER_ID
			)
			.then(
				(result) => {
					//alert('Message Sent, We will get back to you shortly', result.text);
					setApiCalling(false);
					setThankYou(true);
				},
				(error) => {
					alert('An error occurred, Please try again', error.text);
				}
			);
	};
	return (
		<div>
			{apiCalling && (
				<div className='thank-you-message-skeleton'>
					<h1>
						<Skeleton />
					</h1>
					<p>
						<Skeleton />
					</p>
				</div>
			)}

			{thankYou && (
				<div className='thank-you-message'>
					<h1>Thank You</h1>
					<p>You Query/Feedback has been submitted, and we will contact you very soon</p>
				</div>
			)}

			{initalState && (
				<div className='contactus'>
					<div className='contactus-main'>
						<p>
							Available to academic staff, honours and graduate students by
							appointment.
							<br /> For an appointment, contact the Trendall Research
							centre: trendall@latrobe.edu.au
						</p>
						<h1>Enquire Now</h1>
						<p>
							If you prefer to email you can contact us via the form
							below.
							<br /> Tell us about your experience or send us any queries.
						</p>

						<h1>Feedback Form</h1>
						<div className='form-container'>
							<form onSubmit={submitHandler}>
								<div className='three-inputs'>
									<input
										type='text'
										placeholder='Name'
										className='input-element'
										required
									/>
									<input
										type='email'
										placeholder='Email'
										className='input-element'
										required
										onChange={(event) => {
											setEmail(event.target.value);
										}}
									/>
								</div>
								<div className='text-area-container'>
									<textarea
										placeholder='Please share you feedback/query here...'
										className='input-element'
										rows='20'
										required
										onChange={(event) => {
											setFeedback(event.target.value);
										}}
									/>
								</div>
								<div className='submit-container'>
									<button type='submit'>SUBMIT</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Contact;
