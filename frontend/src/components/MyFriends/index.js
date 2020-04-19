import React from 'react'

import ContentLoader, { rect, circle } from 'react-content-loader'

import { Card } from '../Card'

import { Link } from '@reach/router'

import { DivScrollable, Title, Subtitle, DivFriends } from './styles'

export const MyFriends = ({ friends }) =>
	friends ? (
		<>
			<Title>Friends</Title>
			<DivScrollable>
				<DivFriends>
					<Subtitle>Online</Subtitle>
					{friends.map((friend, index) => (
						<Link key={index} to={`/user/${friend.username}`}>
							<Card key={index} title={friend.username} />
						</Link>
					))}
					<Subtitle>Offline</Subtitle>
					{[
						'Agustin',
						'Santiago',
						'Manuel',
						'Agustin',
						'Santiago',
						'Manuel',
					].map((friend, index) => (
						<Card key={index} title={friend} disabled={true} />
					))}
				</DivFriends>
			</DivScrollable>
		</>
	) : (
		<>
			<Title>Friends</Title>
			<DivScrollable>
				<DivFriends>
					<Subtitle>Online</Subtitle>
					<ContentLoader
						speed={1}
						width='100%'
						height='208'
						viewBox='0 0 100% 100'
						backgroundColor='#757575'
						foregroundColor='#545454'
					>
						<circle cx='26' cy='16' r='15' />
						<rect
							x='50'
							y='9'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
						<circle cx='26' cy='60' r='15' />
						<rect
							x='50'
							y='53'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
						<circle cx='26' cy='104' r='15' />
						<rect
							x='50'
							y='97'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
						<circle cx='26' cy='148' r='15' />
						<rect
							x='50'
							y='141'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
						<circle cx='26' cy='192' r='15' />
						<rect
							x='50'
							y='185'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
					</ContentLoader>
					<Subtitle>Offline</Subtitle>
					<ContentLoader
						speed={1}
						width='100%'
						height='208'
						viewBox='0 0 100% 100'
						backgroundColor='#757575'
						foregroundColor='#545454'
					>
						<circle cx='26' cy='16' r='15' />
						<rect
							x='50'
							y='9'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
						<circle cx='26' cy='60' r='15' />
						<rect
							x='50'
							y='53'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
						<circle cx='26' cy='104' r='15' />
						<rect
							x='50'
							y='97'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
						<circle cx='26' cy='148' r='15' />
						<rect
							x='50'
							y='141'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
						<circle cx='26' cy='192' r='15' />
						<rect
							x='50'
							y='185'
							rx='5'
							ry='5'
							width='9vw'
							height='12'
						/>
					</ContentLoader>
				</DivFriends>
			</DivScrollable>
		</>
	)
