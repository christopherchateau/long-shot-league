import React, { Component } from 'react'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'
import Errors from '../Errors'
import { getData } from '../../apiCalls'
import { sortByKey } from '../helpers'
import loadingImg from '../../assets/images/loading.gif'

import './MainPage.css'

export default class MainPage extends Component {
    state = {
        selectedPlayer: '',
        standingsDisplay: 'standings',
        playerList: [],
        teamList: [],
        bonusList: [],
        errors: [],
    }

    componentDidMount = async () => {
        const data = await getData()
        const errors = data.filter(resp => resp.error)
        console.log(errors)
        if (errors.length) {
            this.setState({ errors })
            this.props.catchError()
            return
        }

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

    get showLoading() {
        const { playerList, teamList } = this.state
        return !playerList.length || !teamList.length
    }

    get showErrors() {
        return this.state.errors.length
    }

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
            errors,
        } = this.state

        const loading = <img className='loading-img' src={loadingImg} alt='loading' />

        const displayErrors = errors.length && <Errors {...{ errors }} />

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

        return this.showErrors ? displayErrors : this.showLoading ? loading
        
        : <div className='MainPage'>

            {this.showStandings && standings}

            {this.showTeams && <Teams {...{ teamList }} />}

            {this.showBonus && <BonusPage {...{ playerList, bonusList }} />}

        </div>
    }
}
