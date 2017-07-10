import React from 'react';
import GameCard from './GameCard';


export default function UserRequestList({userProfile,editUserProfile})  {
    const emptyMessage = (
        <p>There are no games yet in your List</p>
    );

    const gamesList = (
     <div className="ui four cards">
         {games.map(game => 
         <GameCard game={game} key={game._id} deleteGame={deleteGame} 
         />)}
     </div>         
    );

    return (
        <div>
            {games.length===0 ?emptyMessage :gamesList}
        </div>
    )
}

UserRequestList.propTypes = {
    userProfile: React.PropTypes.array.isRequired,
    editUserProfile:React.PropTypes.func.isRequired
}
