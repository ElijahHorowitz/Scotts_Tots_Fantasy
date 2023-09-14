import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

function Standings() {
    const [standingState, setStandingState] = useState([false]);
    const [trueStandings, setTrueStandings] = useState([]);
    const [medianStandings, setMedianStandings] = useState([]);

    const toggler = () => {
        standingState ? setStandingState(false) : setStandingState(true);
    }
    const getTrueStandings = async () => {
        const response = await axios.get("http://3.144.36.245:3001/standingRouter/trueStanding");
        const data = await response.data;
        setTrueStandings(data); 
    }
    
    useEffect(() => {
        getTrueStandings();
    },[]);

    const getMedianStandings = async () => {
        const response = await axios.get("http://3.144.36.245:3001/standingRouter/standingByMedian");
        const data = await response.data;
        setMedianStandings(data); 
    }
    
    useEffect(() => {
        getMedianStandings();
    },[]);

    let trueStandingsDis = trueStandings.map((standing) => {
        return (
            <div className="col-span-full container m-auto grid grid-cols-8 border-white dark:border-gray-700">
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.standing}</div>
                <div className="col-span-2 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.team_name}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.team_wins}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.team_losses}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.points_for}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.points_against}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.weeks_above_median}</div>
            </div>
        )
    })

    let medianStandingsDis = medianStandings.map((standing) => {
        return (
            <div className="col-span-full container m-auto grid grid-cols-8 border-white dark:border-gray-700">
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.standing_vs_median}</div>
                <div className="col-span-2 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.team_name}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.team_wins}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.team_losses}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.points_for}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.points_against}</div>
                <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">{standing.weeks_above_median}</div>
            </div>
        )
    })

    return(
        <div className="w-full col-span-2 py-1 md:w-full">
            <div className="bg-slate-300 dark:bg-slate-800 shadow-2xl shadow-gray-700 dark:shadow-gray-800 divide-y rounded-md border-2 border-white dark:border-gray-800">
                <div className="grid grid-cols-8 grid-rows-auto divide-y">
                    <div className="col-span-6 row-start-1 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">Standings</div>
                    <div className="col-span-2 row-start-1 text-black dark:text-gray-200 flex justify-end px-3 py-2 border-white dark:border-gray-800">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" onClick={toggler} on class="sr-only peer"/>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Median Standings</span>
                        </label>
                    </div>
                    {standingState ? <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">Standing</div> : <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">Points</div>}
                    <div className="col-span-2 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">Team</div>
                    <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">Wins</div>
                    <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">Losses</div>
                    <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">PF</div>
                    <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">PA</div>
                    <div className="col-span-1 row-start-2 flex justify-center py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">WAM</div>
                </div>
                {standingState ? trueStandingsDis : medianStandingsDis }
            </div>
        </div>
            
    )
}

export default Standings;