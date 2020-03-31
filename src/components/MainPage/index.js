import React, { Component } from 'react'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'
import { sortByKey } from '../../utilities/helpers'

import './MainPage.css'

export default class MainPage extends Component {
    state = {
        selectedPlayer: '',
        standingsDisplay: 'standings',
        playerList: [],
        teamList: [],
        bonusList: [],
    }

    componentDidMount = () => this.loadData(this.props.data)

    loadData = ([playerList, teamList, bonusList]) => {
        const players = playerList.map(({ name }) => {
            const teams = teamList.filter(({ drafted_by }) => drafted_by === name)
            const points = this.generatePointTotal(teams)
            const bonusData = this.generateBonusData(name, bonusList)
            const bonusTotal = this.generateBonusTotal(bonusData)
            const pointTotal = points + bonusTotal

            return {
                name,
                teams,
                points,
                bonusData,
                bonusTotal,
                pointTotal,
            }
        })

        this.setState({
            playerList: players,
            teamList: sortByKey(teamList),
            bonusList,
        })
    }

    generatePointTotal = teams => teams.reduce((a, b) => a + b.points, 0)

    generateBonusData = (name, bonusList) =>
        bonusList.filter(bonus => bonus.name === name)

    generateBonusTotal = bonusData => this.generatePointTotal(bonusData)

    handlePlayerClick = selectedPlayer =>
        this.setState({ selectedPlayer, standingsDisplay: 'player info' })

    handleBackClick = () =>
        this.setState({ selectedPlayer: '', standingsDisplay: 'standings' })

    get showStandings() {
        return this.props.pageDisplay === 'standings'
    }

    get showTeams() {
        return this.props.pageDisplay === 'teams'
    }

    get showBonus() {
        return this.props.pageDisplay === 'bonus'
    }

    render = () => {
        const {
            standingsDisplay,
            selectedPlayer,
            playerList,
            teamList,
            bonusList,
        } = this.state

        const selectedPlayerData = playerList.find(
            player => player.name === selectedPlayer
        )

        const standings = standingsDisplay === 'standings'
            ? <Standings
                {...{ playerList, handlePlayerClick: this.handlePlayerClick }}
            />
            : <PlayerInfo
                {...{ selectedPlayerData, handleBackClick: this.handleBackClick }}
            />

        return <div className='MainPage'>

            {this.showStandings && standings}

            {this.showTeams && <Teams {...{ teamList }} />}

            {this.showBonus && <BonusPage {...{ playerList, bonusList }} />}

        </div>
    }
}
