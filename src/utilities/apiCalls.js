import { formatApiData as format } from './helper.js'

let endpoint
// endpoint = 'http://localhost:3001/api/v1/longshotleague'
endpoint = 'https://long-shot-league-be.herokuapp.com/api/v1/longshotleague'

const paths = ['players', 'teams', 'bonus']

const get = async path => {
	const response = await fetch(`${endpoint}/${path}`)
	return await response.json()
}

export const getData = async () => {
	try {
		const data = await Promise.all(paths.map(path => get(path)))
		return format(paths, data)
	} catch {
		return { errors: ['Data failed to load :-('] }
	}
}
