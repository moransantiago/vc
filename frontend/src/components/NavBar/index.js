import React from 'react'

import 'bulma/css/bulma.css'

import { Image, Nav, NavSpan } from './styles'

export const NavBar = ({}) => (
	<Nav
		className="navbar is-fixed-bottom is-white"
		role="navigation"
		aria-label="main navigation"
	>
		<div className="navbar-brand">
			<Image src="https://citas.in/media/authors/diego-maradona.detail.jpg" />
			<a
				role="button"
				className="navbar-burger burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div id="navbarBasicExample" className="navbar-menu">
			<div className="navbar-start">
				<NavSpan className="navbar-item">
					<p className="is-size-5">moransantiago</p>
					<p className="is-size-7">santimoran.1@hotmail.com</p>
				</NavSpan>
			</div>
			<div className="navbar-end">
				<div className="navbar-item">
					<a className="button is-danger is-rounded is-outlined">Log out</a>
				</div>
			</div>
		</div>
	</Nav>
)
