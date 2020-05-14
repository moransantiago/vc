import styled from 'styled-components'

export const DivContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const DivResponsive = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	@media (max-height: 575px) {
		justify-content: flex-end !important;
	}

	@media (min-height: 576px) {
		justify-content: center !important;
	}

	@media (max-width: 499px) {
		justify-content: flex-end;
		width: 100%;
		min-width: 350px !important;
	}

	@media (min-width: 500px) {
		width: 85%;
		max-width: 450px !important;
		justify-content: center;
	}

	@media (min-width: 900px) {
		max-width: 500px !important;
	}

	@media (min-width: 1200px) {
		max-width: 500px !important;
	}

	@media (min-width: 1600px) {
		max-width: 600px !important;
	}
`

export const BodyDiv = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #2d2d2d;
	border-radius: 6px;
	box-shadow: 0px 8px 40px -19px rgba(0, 0, 0, 0.75);
	width: 100%;
	border: 1px solid #484848;
`

export const Section = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #ededed;
	padding: 16px;
	border-bottom: 1px solid #484848;
	&:last-child {
		border: 0;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		width: 100%;

		input {
			margin-top: 10px;
		}
	}

	div.buttons {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
	}

	button {
		&:first-child {
			width: 100px !important;
		}
		width: 150px !important;
		height: 40px !important;
	}
`

export const Input = styled.input`
	border: 0;
	background-color: #5e5e5e;
	border-radius: 4px;
	color: #ededed;
	font-weight: bolder;
	font-size: 16px;
	padding: 8px;
	font-family: BalooPaaji;

	@media (max-width: 499px) {
		max-width: 60%;
	}

	@media (min-width: 500px) {
		width: 60%;
	}

	@media (min-width: 900px) {
		width: 50%;
	}

	@media (min-width: 1200px) {
		width: 60%;
	}

	@media (min-width: 1600px) {
		width: 70%;
	}

	&[disabled] {
		opacity: 0.5;
	}
	&:hover {
		background-color: #575757;
	}
`

export const Label = styled.label`
	font-size: 18px;
`

export const TextArea = styled.textarea`
	border: 0;
	background-color: #5e5e5e;
	border-radius: 4px;
	color: #ededed;
	font-weight: bolder;
	font-size: 16px;
	padding: 8px;
	font-family: BalooPaaji;
	resize: none;

	@media (max-width: 499px) {
		max-width: 70%;
	}

	@media (min-width: 500px) {
		width: 60%;
	}

	@media (min-width: 900px) {
		width: 50%;
		height: 100%;
	}

	@media (min-width: 1200px) {
		width: 60%;
		height: 100%;
	}

	@media (min-width: 1600px) {
		width: 70%;
		height: 100%;
	}

	&[disabled] {
		opacity: 0.5;
	}
	&:hover {
		background-color: #575757;
	}
`

export const CancelButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: inherit;
	border: 1px solid #5e5e5e;
	margin-right: 10px;
	border-radius: 3px;
	color: #ededed;
	height: 32px;
	transition: 0.2s;
	&:hover {
		background-color: #5e5e5e;
	}
`

export const Img = styled.img`
	border-radius: 50%;
	background-color: #5e5e5e;
	object-fit: cover;
	color: #ededed;
	border: 2px solid #888;
	height: 100px;
	width: 100px;
`
