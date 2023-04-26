import React, { } from 'react'

function GameMechanics({ gameMechanics }) {

    return (
        <div>
            <ul>
                {gameMechanics.length > 0 ? gameMechanics.map((gameMechanic, index) => (
                    <li key={index}>
                        {gameMechanic?.gameMechanic}
                    </li>
                ))
                    : ""
                }
            </ul>
        </div>
    )
}

export default GameMechanics