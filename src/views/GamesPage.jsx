import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLoaderData } from "react-router";
import GameList from "../HomeComponents/GameList";

export default function GamesPage(){

    const genres = useLoaderData();

    const [activeIndex, setActiveIndex] = useState(0);
    const [games, setGames] = useState([]);

    const isStart = activeIndex === 0;

    const activeGenre = genres[activeIndex];

    const getGenreGames = async(slug)=>{
        const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${slug}`);
        const json = await promise.json();
        setGames (json.results);
    }


    const handleClick = (index)=>{
        setActiveIndex(index);
    }

    useEffect(()=>{
        if(!activeGenre) return;
        getGenreGames(activeGenre.slug);
        setGameIndex(0);
    }, [activeGenre]);

    // va indietro di 1 ma non scende al di sotto di 0
    const prev = ()=>{
        setActiveIndex((prev)=> Math.max(prev - 1, 0));
    }

    const next = ()=>{
        setActiveIndex((prev)=> Math.min(prev + 1, genres.length - 1)); 
    }

    const [gameIndex, setGameIndex] = useState(0);
    const prevGames = ()=>{
        setGameIndex((prev)=> Math.max(prev - 1, 0));
    }

    const nextGames = ()=>{
        setGameIndex((prev)=> Math.min(prev + 1, games.length - 1)); 
    }
     
    return(
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-white text-xl">Games</h1>
                <span className="flex gap-4 text-xl">
                    <IoIosArrowBack onClick={prev} className={`cursor-pointer ${isStart ? "text-gray-400" : "text-white"}`}/>
                    <IoIosArrowForward onClick={next} className={`cursor-pointer ${isStart ? "text-white" : "text-(--turchese)"}`}/>
                </span>                   
            </div> 

            <div className="flex space-x-4 mt-10">
                {genres.map((genre, index)=>{
                // mostra in primo piano solo 7 elementi dell'array, gli altri non sono renderizzati
                if (index < activeIndex || index > activeIndex + 6) return null;
                // stato attivo elemento selezionato 
                const isActive = index === activeIndex;

                return(
                    <div key={genre.id} onClick={()=> handleClick(index, genre.slug)} className={`transition-all duration-500 cursor-pointer ${isActive ? "scale-110 opacity-100" : "scale-90 opacity-50"}`}>
                        <div className="relative card w-[145px] h-[145px] flex justify-center items-center">
                            <img src={genre.image_background} className="w-full h-full rounded-box object-cover"/>

                            <div className="absolute border border-(--turchese) bg-(--bluDark)/70 px-4 py-1 rounded-3xl">
                                <p className="text-white text-center text-lg font-semibold">{genre.name}</p>
                            </div>                               
                        </div>
                    </div>
                    )                       
                })}
            </div> 

            <section className="container mt-20">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-xl">
                        {`${activeGenre.name} Games`}
                    </h2>
                    
                    <span className="flex gap-4 text-xl">
                        <IoIosArrowBack onClick={prevGames} className={`cursor-pointer ${isStart ? "text-gray-400" : "text-white"}`}/>
                        <IoIosArrowForward onClick={nextGames} className={`cursor-pointer ${isStart ? "text-white" : "text-(--turchese)"}`}/>
                    </span>
                </div>

                <div className="mt-10">
                    <GameList>
                        {games.map((game, index)=>{
                            if (index < gameIndex || index > gameIndex + 3) return null;
                            return(
                                <GameList.Card key={game.id} game={game}/>
                            )
                        })}
                    </GameList>
                </div>
            </section> 
        </>
    )
}