export const sumPoints = pts => pts.reduce((a, b) => a + b.points, 0)

export const sortByKey = (input, key = 'name', k = formatKey(key)) =>
	input.sort((a, b) => (a[k] < b[k] ? -1 : 1))

const formatKey = input => input.replace(/\s/g, '_')

export const formatApiData = (paths, data) => {
	const compiledData = compilePlayersData(data)
	const formattedData = compiledData.reduce(
		(acc, d, i) => {
			d.error
				? acc.errors.push(d.error)
				: (acc[`${paths[i]}Data`] = sortByKey(d))

			return acc
		},
		{ errors: [] }
	)

	return formattedData
}

export const compilePlayersData = data => {
	const [playersData, teamsData, bonusData] = data

	const compiledPlayersData = playersData.map(({ name, id }) => {
		const teams = teamsData.filter(
			({ drafted_by }) => drafted_by === name
		)
		const points = sumPoints(teams)
		const bonuses = getPlayerBonuses(name, bonusData)
		const bonusTotal = sumPoints(bonuses)
		const pointTotal = points + bonusTotal

		return {
			id,
			name,
			teams,
			points,
			bonuses,
			pointTotal,
			bonusTotal,
		}
	})

	return [compiledPlayersData, teamsData, bonusData]
}

const getPlayerBonuses = (name, bonusData) =>
	bonusData.filter(bonus => bonus.name === name)
