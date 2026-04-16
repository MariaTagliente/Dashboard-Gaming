export default function GameCard({game}){
    return(
        <>
          <div className="card h-[210px] bg-(--blackDark) rounded-xl shadow-xl hover:bg-(--bluDark)">
            <img src={`${game.background_image}`} className="h-[150px] w-full brightness-65 object-cover rounded-xl" alt="card-game"/>
            <div className="flex justify-center mt-4">
                <h5 className="card-title text-base text-white"> {game.name} </h5>
            </div>

          </div>
        </>
    )
}