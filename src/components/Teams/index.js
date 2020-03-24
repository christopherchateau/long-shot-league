import React, { Component } from 'react'
import loadingImg from '../../assets/images/loading.gif'
import './Teams.css'

class Teams extends Component {
    state = {
        display: 'show all',
        teamSort: 'alphabetical',
    }

    toggleTeamDisplay = () => {
        let { display } = this.state
        display === 'show all'
            ? (display = 'still alive')
            : (display = 'show all')
        this.setState({ display })
    }

    toggleTeamSort = () => {
        let { teamSort } = this.state
        teamSort === 'alphabetical'
            ? (teamSort = 'drafted by')
            : (teamSort = 'alphabetical')
        this.setState({ teamSort })
    }

    sortByPlayer = input =>
        input.sort((a, b) => {
            if (a.drafted_by < b.drafted_by) return -1
            if (a.drafted_by > b.drafted_by) return 1
        })

    render() {
        let { teamList, sortByName } = this.props
        const { display, teamSort } = this.state
        if (display === 'still alive') {
            teamList = teamList.filter(team => !team.is_eliminated)
        }

        teamSort === 'drafted by'
            ? this.sortByPlayer(teamList)
            : sortByName(teamList)

        const teams = teamList.map(team => (
            <div
                className={'team'.concat(
                    team.is_eliminated ? ' red' : ' green'
                )}
                key={team.name}
            >
                <h3>
                    {team.name} - {team.points}
                </h3>
                <h5>{team.drafted_by}</h5>
            </div>
        ))

        if (!teamList.length) {
            return (
                <img className='loading-img' src={loadingImg} alt='loading' />
            )
        } else {
            return (
                <div className='Teams'>
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
                    <div className='teams-wrapper'>{teams}</div>;
                </div>
            )
        }
    }
}

export default Teams
