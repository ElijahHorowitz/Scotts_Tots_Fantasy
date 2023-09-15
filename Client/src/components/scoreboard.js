import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";


function ScoreBoard() {
    const [displayWeek, setDisplayWeek] = useState([]); 
    const [avaliableWeeks, setAvaliableWeks] = useState([displayWeek]);
    const [params, setParams] = useState([displayWeek]);
    const [scores, setScores] = useState([]);
    const [median, setMedian] = useState([]);

    const getMaxWeek = async () => {
        const response = await axios.get(`https://scottstotsfantasy.com/scoreboardRouter/currentWeek/max`);
        const maxWeekResponse = await response.data
        console.log(maxWeekResponse.week)
        setDisplayWeek(maxWeekResponse.week);
        setParams(maxWeekResponse.week)
    };

    useEffect(() => {
        getMaxWeek();
    },[]);

    useEffect(() => {
        axios.get(`https://scottstotsfantasy.com/medianRouter/${displayWeek}`).then(response => {
        console.log(response.data);
        setMedian(response.data);
        
        });
    }, [params]);

    useEffect(() => {
            axios.get(`https://scottstotsfantasy.com/scoreboardRouter/selectWeek/${params}`).then(response => {
                console.log(response.data);
                setScores(response.data);
            })
        }, [params]);
    
    useEffect(() => {
        axios.get(`https://scottstotsfantasy.com/scoreboardRouter/currentWeek/availableWeeks`).then(response => {
            console.log(response.data);
            setAvaliableWeks(response.data);
        })
    }, []); 

    let realMedian = median.map((med, key) => { 
        return(med.Median);
    })

    let scoresRows = scores.map((score, key) => {
        var winAndAbove = "bg-green-600";
        var winAndBelow = "bg-yellow-600";
        var loseAndAbove = "bg-red-400";
        var loseAndBelow = "bg-red-800";
        var homeColor = "";
        var awayColor = "";
        if(score.home_score > score.away_score && score.home_score > realMedian){
            homeColor=winAndAbove;
            if(score.away_score > realMedian){
                awayColor=loseAndAbove;
            }
            else{
                awayColor=loseAndBelow;
            }
        }
        else if(score.home_score > score.away_score && score.home_score < realMedian){
            homeColor=winAndBelow;
            awayColor=loseAndBelow;
        }
        else if(score.home_score < score.away_score && score.away_score > realMedian){
            awayColor=winAndAbove;
            if(score.home_score > realMedian){
                homeColor=loseAndAbove;
            }
            else{
                homeColor=loseAndBelow;
            }
        }else if(score.home_score < score.away_score && score.away_score < realMedian){
            awayColor=winAndBelow;
            homeColor=loseAndBelow;
        }

        
        return (
            <div class=" col-span-full container m-auto grid grid-cols-8 border-white dark:border-gray-700">
                <div class="col-span-6 px-4 py-3 text-left text-xs font-medium text-black dark:text-gray-200 uppercase">{score.home_team}</div>
                <div class={`${homeColor} col-span-2 text-center px-6 py-3 text-left text-xs font-medium text-black dark:text-gray-200 uppercase`}>{score.home_score}</div>
                <div class="col-span-6 px-4 py-3 text-left text-xs font-medium text-black dark:text-gray-200 uppercase">{score.away_team}</div>
                <div class={`${awayColor} col-span-2 text-center px-6 py-3 text-left text-xs font-medium text-black dark:text-gray-200 uppercase`}>{score.away_score}</div>
            </div> 
        )
    });

    let weeksAvaliable = avaliableWeeks.map((weeks, key) => {
        return (
            <Menu.Item onClick={() => handleClick(weeks.week)}>
                {({ active }) => (
                    <a
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                    >
                        Week {weeks.week}
                    </a>
                )}
            </Menu.Item>
        )
    });

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function handleClick(value){
        setDisplayWeek(value);
        setParams(value);
    }

    return (
        <div className="w-full py-1 md:w-full">
            <div class="bg-slate-300 dark:bg-slate-800 shadow-2xl shadow-gray-700 dark:shadow-gray-800 grid grid-cols-10 rounded-md divide-y border-2 border-white dark:border-gray-800">
                <div class="col-span-6 px-6 py-3 text-xs font-medium text-black dark:text-gray-200 dark:border-gray-700 uppercase">ScoreBoard</div>
                <div className="flex justify-end px-1 margin-left-auto col-span-4 border-slate-200 dark:border-slate-900">
                    <Menu as="div" className="relative inline-block flex-end py-1">
                        <div className="-top-1">
                            <Menu.Button className="inline-flex w-full gap-x-1.5 rounded-md bg-white dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50">
                                Week {displayWeek}
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute z-10 mt-2 w-20 md:w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {weeksAvaliable}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                {scoresRows}
            </div>
        </div>
    )
}

export default ScoreBoard;