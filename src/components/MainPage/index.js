import React, { Component } from 'react'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'
import Errors from '../Errors'
import { getData } from '../../utilities/apiCalls'
import { sortByKey } from '../helpers'
import loadingImg from '../../assets/images/loading.gif'

import './MainPage.css'

export default class MainPage extends Component {
    state = {
        selectedPlayer: '',
        standingsDisplay: 'standings',
        playerData: [],
        teamData: [],
        bonusData: [],
        errors: [],
    }

    componentDidMount = async () => {
        const data = await getData()
        const errors = data.filter(resp => resp.error)

        errors.length
            ? this.setState({ errors }, this.props.catchError())
            : this.loadPlayerData(data)
    }

    loadPlayerData = ([playerData, teamData, bonusData]) => {
        const players = playerData.map(({ name }) => {

            const teams = teamData.filter(({ drafted_by }) => drafted_by === name)
            const points = this.generatePointTotal(teams)
            const bonusData = this.generateBonusData(name, bonusData)
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
            playerData: players,
            teamData: sortByKey(teamData),
            bonusData,
        })
    }

    generatePointTotal = teams => teams.reduce((a, b) => a + b.points, 0)

    generateBonusData = (name, bonusData) =>
        bonusData.filter(bonus => bonus.name === name)

    generateBonusTotal = bonusData => this.generatePointTotal(bonusData)

    handlePlayerClick = selectedPlayer =>
        this.setState({ selectedPlayer, standingsDisplay: 'player info' })

    handleBackClick = () =>
        this.setState({ selectedPlayer: '', standingsDisplay: 'standings' })

    get showLoading() {
        const { playerData, teamData } = this.state
        return !playerData.length || !teamData.length
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
            playerData,
            teamData,
            bonusData,
            errors,
        } = this.state

        const loading = <img className='loading-img' src={loadingImg} alt='loading' />

        const displayErrors = errors.length && <Errors {...{ errors }} />

        const selectedPlayerData = playerData.find(
            player => player.name === selectedPlayer
        )

        const standings = standingsDisplay === 'standings'
            ? <Standings
                {...{ playerData, handlePlayerClick: this.handlePlayerClick }}
            />
            : <PlayerInfo
                {...{ selectedPlayerData, handleBackClick: this.handleBackClick }}
            />

        return this.showErrors ? displayErrors
            
            : this.showLoading ? loading

                : <div className='MainPage'>

                    {this.showStandings && standings}

                    {this.showTeams && <Teams {...{ teamData }} />}

                    {this.showBonus && <BonusPage {...{ playerData, bonusData }} />}

                </div>
    }
}
