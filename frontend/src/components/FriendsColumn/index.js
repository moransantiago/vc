import React from 'react'

import 'bulma/css/bulma.css'

import { DivColumn, Subtitle } from './styles'

import { UserCard } from '../UserCard/index'

export const FriendsColumn = ({}) => (
	<div className="columns">
		<DivColumn className="column is-2 is-offset-10 has-background-light">
			<Subtitle>Friends</Subtitle>
			{['Agustin', 'Santiago', 'Manuel', 'Agustin', 'Santiago', 'Manuel'].map(
				item => (
					<UserCard>{item}</UserCard>
				)
			)}

			<div class="dropdown is-hoverable">
				<div class="dropdown-trigger">
					<button
						class="button"
						aria-haspopup="true"
						aria-controls="dropdown-menu4"
					>
						<span>
							<Subtitle>Friend Requests</Subtitle>
						</span>
						<span class="icon is-small">
							<i class="fas fa-angle-down" aria-hidden="true"></i>
						</span>
					</button>
				</div>
				<div class="dropdown-menu" id="dropdown-menu4" role="menu">
					<div class="dropdown-content">
						<div class="dropdown-item">
							{[
								'Agustin',
								'Santiago',
								'Manuel',
								'Agustin',
								'Santiago',
								'Manuel'
							].map(item => (
								<UserCard>{item}</UserCard>
							))}
						</div>
					</div>
				</div>
			</div>
			<button>Config</button>
		</DivColumn>
	</div>
)
