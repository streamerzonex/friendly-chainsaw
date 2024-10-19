import './styles/playerStatusStyle.css'
import '../Schedule/styles/scheduleStyle.css'

import { useEffect } from "react";
import { EventDetails } from "../types/baseTypes";

type Props = {
    eventDetails: EventDetails,
    gameIndex: number
}

export function GameDetails({ eventDetails, gameIndex }: Props) {
    useEffect(() => {

    }, []);

    return (
        (eventDetails.match.games.length > 1) ? (
            <div className='game-selector'>
                {eventDetails.match.games.map((game) => {
                    return <a className={`game-selector-item ${game.state} ${gameIndex === game.number ? `selected` : ``}`} href={`/live-lol-esports/#/live/${eventDetails.id}/game-index/${game.number}`} key={`game-selector-${game.id}`}>
                        <span className={`#/live/${game.state}`}>Game {game.number} - {capitalizeFirstLetter(game.state)}</span>
                    </a>
                })}

            </div>) : null
    )
}

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}