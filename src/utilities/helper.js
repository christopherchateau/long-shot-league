/* eslint-disable */

export const sumPoints = pts => pts.reduce((a, b) => a + b.points, 0)

export const sortByKey = (input, key = 'name', k = formatKey(key)) =>
	input.sort((a, b) => (a[k] < b[k] ? -1 : 1))

const formatKey = input => input.replace(/\s/g, '_')

export const formatApiData = (paths, data) => {
	const formattedData = data.reduce(
		(acc, d, i) => {
			d.error
				? acc.errors.push(d.error)
				: (acc[`${paths[i]}Data`] = sortByKey(d))

			return acc
		},
		{ errors: [] }
	)

	return compilePlayersData(formattedData)
}

export const compilePlayersData = data => {
	const { playersData, teamsData, bonusData } = data

	playersData.forEach(player => {
		const teams = teamsData.filter(
			({ drafted_by }) => drafted_by === player.name
		)
		const points = sumPoints(teams)
		const bonuses = getPlayerBonuses(name, bonusData)
		const bonusTotal = sumPoints(bonuses)
		const pointTotal = points + bonusTotal

		player.teams = teams
		player.points = points
		player.bonuses = bonuses
		player.bonusTotal = bonusTotal
		player.pointTotal = pointTotal
	})

	return data
}

const getPlayerBonuses = (name, bonusData) =>
	bonusData.filter(bonus => bonus.name === name)

