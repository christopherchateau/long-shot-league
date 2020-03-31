import React, { Component } from 'react'
import { sortByKey } from '../../utilities/helpers'

import './Teams.css'

export default class Teams extends Component {
    state = {
        display: 'show all',
        teamSort: 'name',
    }

    toggleTeamDisplay = () => {
        let { display } = this.state
        display === 'show all'
            ? display = 'still alive'
            : display = 'show all'
        this.setState({ display })
    }

    toggleTeamSort = () => {
        let { teamSort } = this.state
        teamSort === 'name'
            ? teamSort = 'drafted by'
            : teamSort = 'name'
        this.setState({ teamSort })
    }

    render = () => {
        let { teamList } = this.props
        const { display, teamSort } = this.state

        if (display === 'still alive') {
            teamList = teamList.filter(team => !team.is_eliminated)
        }

        const teams = sortByKey(teamList, teamSort).map(
            ({ name, points, drafted_by, is_eliminated }) =>
                <div
                    key={name}
                    className={'team'.concat(is_eliminated ? ' red' : ' green')}
                >
                    <h3>{name} - {points}</h3>
                    <h5>{drafted_by}</h5>
                </div>
        )

        return <div className='Teams'>

            <div className='team-btn-wrapper'>
                <button
                    className='teams-toggle-btn'
                    onClick={this.toggleTeamDisplay}
                >
                    {display}
                </button>
                <button
                    className='teams-display-btn'
                    onClick={this.toggleTeamSort}
                >
                    {teamSort}
                </button>
            </div>

            <br />

            <div className='teams-wrapper'>{teams}</div>

        </div>
    }
}
