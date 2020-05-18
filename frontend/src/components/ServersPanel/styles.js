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
	box-shadow: 0px 8px 40px -19px rgb(0, 0, 0,);
	width: 100%;
	border: 1px solid #484848;
`

export const Section = styled.div`
	position: relative;
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
		padding: 0;

		&.column {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
		}

		&.row {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 15px;
			position: relative;

			&:last-child {
				margin: 0;
			}
		}

		&.buttons {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
		}
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
	flex: 1;

	&[disabled] {
		opacity: 0.5;
	}
	&:hover {
		background-color: #575757;
	}
`

export const Label = styled.label`
	font-size: 18px;
	margin-right: 22px;
	white-space: nowrap;
`

export const Divider = styled.hr`
	margin: 0 15px 0 0;
	border-right: 2px solid #484848;
	height: 100%;
`

export const TextArea = styled.textarea`
	position: relative;
	border: 0;
	background-color: #5e5e5e;
	border-radius: 4px;
	color: #ededed;
	font-weight: bolder;
	font-size: 14px;
	padding: 8px;
	font-family: BalooPaaji;
	resize: none;
	flex: 1;

	&[disabled] {
		opacity: 0.5;
	}
	&:hover {
		background-color: #575757;
	}
`

export const DivTextArea = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
	top: 5px;
	left: 5px;

	div {
		position: relative;
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
	font-size: 12px;
	display: flex;
	align-items: center;
	min-height: 70px;
	min-width: 70px;
	max-height: 70px;
	max-width: 70px;
	margin-left: 15px;
	border: 2px solid ${({ border }) => border };
`

export const Card = styled.div`
	background-color: rgb(156, 156, 156);
	border: 2px solid ${({ border }) => border };
	font-size: 14px;
	font-family: BalooPaaji;
	color: #ffffff;
	padding: 5px !important;
	border-radius: 15px;
	margin: 0 5px 5px 0;
`
