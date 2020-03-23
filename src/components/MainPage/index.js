import React, { Component } from 'react'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'
import { getPlayers, getTeams, getBonusData } from '../../apiCalls'
import './MainPage.css'

class MainPage extends Component {
    state = {
        selectedPlayer: '',
        standingsDisplay: 'standings',
        players: [],
        teamList: [],
        bonusList: [],
    }

    componentDidMount = async () => {
        console.log(this.props)
        const playerList = await getPlayers()
        const teamList = await getTeams()
        const bonusList = await getBonusData()

        await this.loadPlayerData(playerList, teamList, bonusList)
    }

    loadPlayerData = (playerList, teamList, bonusList) => {
        const players = []

        playerList.forEach(player => {
            const teams = teamList.filter(
                listTeam => listTeam.drafted_by === player.name
            )
            const points = this.generatePointTotal(teams)
            const bonusData = this.generateBonusData(player.name, bonusList)
            const bonusTotal = this.generateBonusTotal(bonusData)
            const pointTotal = points + bonusTotal

            players.push({
                name: player.name,
                teams,
                points,
                bonusData,
                bonusTotal,
                pointTotal,
            })
        })
        this.setState({
            players,
            bonusList,
            teamList: this.sortByName(teamList),
        })
    }

    generatePointTotal = teams => teams.reduce((a, b) => a + b.points, 0)

    generateBonusData = (name, bonusList) =>
        bonusList.filter(bonus => bonus.name === name)

    generateBonusTotal = bonusData => this.generatePointTotal(bonusData)

    handlePlayerClick = selectedPlayer => {
        this.setState({ selectedPlayer, standingsDisplay: 'player info' })
    }

    handleBackClick = () => {
        this.setState({ selectedPlayer: '', standingsDisplay: 'standings' })
    }

    sortByName = input =>
        input.sort((a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
        })

    render() {
        const { pageDisplay } = this.props
        const {
            standingsDisplay,
            selectedPlayer,
            players,
            teamList,
            bonusList,
        } = this.state
        const selectedPlayerData = players.find(
            player => player.name === selectedPlayer
        )
        return (
            <div className='MainPage'>
                {pageDisplay === 'standings' &&
                    standingsDisplay === 'player info' && (
                        <PlayerInfo
                            selectedPlayerData={selectedPlayerData}
                            handleBackClick={this.handleBackClick}
                        />
                    )}
                {pageDisplay === 'standings' &&
                    standingsDisplay === 'standings' && (
                        <Standings
                            players={players}
                            handlePlayerClick={this.handlePlayerClick}
                        />
                    )}
                {pageDisplay === 'teams' && (
                    <Teams teamList={teamList} sortByName={this.sortByName} />
                )}
                {pageDisplay === 'bonus' && (
                    <BonusPage players={players} bonusList={bonusList} />
                )}
            </div>
        )
    }
}

export default MainPage
