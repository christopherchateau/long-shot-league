import React, { Component } from 'react'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'
import { getData } from '../../apiCalls'
import { sortByKey } from '../helpers'

import './MainPage.css'

export default class MainPage extends Component {
    state = {
        selectedPlayer: '',
        standingsDisplay: 'standings',
        players: [],
        teamList: [],
        bonusList: [],
    }

    componentDidMount = async () => {
        const data = await getData()
        this.loadPlayerData(data)
    }

    loadPlayerData = ([playerList, teamList, bonusList]) => {
        const players = []

        playerList.forEach(({ name }) => {
            const teams = teamList.filter(
                listTeam => listTeam.drafted_by === name
            )
            const points = this.generatePointTotal(teams)
            const bonusData = this.generateBonusData(name, bonusList)
            const bonusTotal = this.generateBonusTotal(bonusData)
            const pointTotal = points + bonusTotal

            players.push({
                name,
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
            teamList: sortByKey(teamList),
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

    render = () => {
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

        const standings = standingsDisplay === 'standings'
            ? <Standings
                {...{ players, handlePlayerClick: this.handlePlayerClick }}
            />
            : <PlayerInfo
                {...{ selectedPlayerData, handleBackClick: this.handleBackClick }}
            />

        return <div className='MainPage'>

            {pageDisplay === 'standings' && standings}

            {pageDisplay === 'teams'
                && <Teams {...{ teamList }} />
            }

            {pageDisplay === 'bonus'
                && <BonusPage {...{ players, bonusList }} />
            }

        </div>
    }
}
