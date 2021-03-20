export const sumPoints = pts => pts.reduce((a, b) => a + Number(b.points), 0)

export const sortByKey = (input, key = 'name', k = formatKey(key)) =>
	input.sort((a, b) => (a[k] < b[k] ? -1 : 1))

const formatKey = input => input.replace(/\s/g, '_')

export const formatApiData = (endpoints, data) => {
	const compiledData = compilePlayersData(data)
	const formattedData = compiledData.reduce(
		(acc, d, i) => {
			d.error
				? acc.errors.push(d.error)
				: (acc[`${endpoints[i]}Data`] = sortByKey(d))

			return acc
		},
		{ errors: [] }
	)

	return formattedData
}

export const compilePlayersData = data => {
	const [playersData, teamsData, bonusData] = data

	if (data.find(d => d.error)) return data

	const compiledPlayersData = playersData.map(({ name }) => {
		const teams = teamsData.filter(
			({ drafted_by }) => drafted_by === name
		)
		const points = sumPoints(teams)
		const bonuses = getPlayerBonuses(name, bonusData)
		const bonusTotal = sumPoints(bonuses)
		const pointTotal = points + bonusTotal

		return {
			name,
			teams,
			points,
			bonuses,
			bonusTotal,
			pointTotal,
		}
	})

	return [compiledPlayersData, teamsData, bonusData]
}

const getPlayerBonuses = (name, bonusData) =>
	bonusData.filter(bonus => bonus.name === name)
