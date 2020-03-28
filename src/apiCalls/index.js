const url = 'http://localhost:3001/api/v1/longshotleague/'//'https://long-shot-league-be.herokuapp.com/api/v1/longshotleagu/'

const types = ['players', 'teams', 'bonus']

const get = async type => {
    const response = await fetch(`${url}${type}`)
    return await response.json()
}

export const getData = () => {
    try {
        return Promise.all(
            types.map(type => get(type))
        )
    } catch (error) {
        console.error(error)
    }
}
