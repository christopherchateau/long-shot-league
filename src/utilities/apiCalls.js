import { formatApiData as format } from './helper.js'
// import { players, teams, bonus } from '../data/mockData'

const endpoints = {
	players: 'https://sheet.best/api/sheets/bfb453e8-3009-419f-895b-e7bdccdec797',
	teams: 'https://sheet.best/api/sheets/2ab21c69-d5f6-4aff-9a76-c6c7ad90592b',
	bonus: 'https://sheet.best/api/sheets/a61b2b38-2cae-45ba-ae74-4fbb69ea296b',
}

// const endpoints = { players, teams, bonus }

const endpointKeys = Object.keys(endpoints)

const get = async endpoint => {
	const response = await fetch(endpoint)
	return await response.json()
	// return endpoint
}

export const getData = async () => {
	try {
		const data = await Promise.all(
			endpointKeys.map(key => get(endpoints[key]))
		)
		return format(endpointKeys, data)
	} catch {
		return { errors: ['Data failed to load :-('] }
	}
}
