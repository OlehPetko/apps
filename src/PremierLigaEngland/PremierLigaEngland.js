import '../App.css';
import {useState} from "react";


function PremierLigaEngland() {


    const initialState = [
        {id: Math.random(), position: 1, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 2, nameTeam: 'Liverpool', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 3, nameTeam: 'Chelsea', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 4, nameTeam: 'Arsenal', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 5, nameTeam: 'Manchester United', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 6, nameTeam: 'West Ham United', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 7, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 8, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 9, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 10, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 11, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 12, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 13, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 14, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 15, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 16, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 17, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 18, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 19, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
        {id: Math.random(), position: 20, nameTeam: 'Manchester city', games: 28, victory: 22, lost: 3, draw: 3, points: 69},
]
    const [teams, setTeams] = useState(initialState)
    return (
    <div className="App">
        {teams.map(team =>
            <div>
                {team.position}.
                {team.nameTeam}
                {team.games}
                {team.victory}
                {team.lost}
                {team.draw}
                {team.points}

                <hr/>
            </div>)}
    </div>
  );
}

export default PremierLigaEngland;
