const url = 'https://long-shot-league-be.herokuapp.com/api/v1/longshotleague/'

const types = ['players', 'teams', 'bonus']

const get = async type => {
    const response = await fetch(`${url}${type}`)
    return await response.json()
}

export const getData = () =>
    Promise.all(
        types.map(type => get(type))
    )
