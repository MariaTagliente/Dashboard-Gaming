import GameCard from "./GameCard"

export default function GameList({children}){
    return(
        <>
          <main className="grid grid-cols-4 gap-7">
            {children}
          </main>
        </>
    )
}
GameList.Card = GameCard