import React from 'react'

import 'bulma/css/bulma.css'

import { DivContainerOfColumns, DivColumn, Title, Subtitle } from './styles'

import { UserCard } from '../UserCard/index'

import { MdSettings } from 'react-icons/md'

export const FriendsColumn = ({}) => (
	<DivContainerOfColumns className="columns is-marginless">
		<DivColumn className="column is-2 is-offset-10 has-background-light">
			<Title>Friends</Title>
			<div style={{ overflow: 'scroll' }}>
				<Subtitle>Online</Subtitle>
				{[
					'Agustin',
					'Santiago',
					'Manuel',
					'Agustin',
					'Santiago',
					'Manuel',
					'Agustin',
					'Santiago',
					'Manuel'
				].map(item => (
					<UserCard>{item}</UserCard>
				))}
				<Subtitle>Offline</Subtitle>
				{['Agustin', 'Santiago', 'Manuel', 'Agustin', 'Santiago', 'Manuel'].map(
					item => (
						<UserCard opacity="0.5">{item}</UserCard>
					)
				)}
			</div>
			<div class="dropdown is-up is-hoverable">
				<div class="dropdown-trigger">
					<button
						class="button"
						aria-haspopup="true"
						aria-controls="dropdown-menu4"
					>
						<span>
							<Subtitle className="is-marginless">Friend Requests</Subtitle>
						</span>
						<span class="icon is-small">
							<i class="fas fa-angle-down" aria-hidden="true"></i>
						</span>
					</button>
				</div>
				<div class="dropdown-menu" id="dropdown-menu4" role="menu">
					<div class="dropdown-content">
						<div class="dropdown-item">
							{['Agustin', 'Santiago', 'Manuel'].map(item => (
								<UserCard>{item}</UserCard>
							))}
						</div>
					</div>
				</div>
			</div>
			<MdSettings
				onClick={() => {
					alert('Settings!')
				}}
			/>
		</DivColumn>
	</DivContainerOfColumns>
)
