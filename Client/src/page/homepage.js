import React, { useEffect, useState, Fragment } from "react";
import ScoreBoard from "../components/scoreboard";
import Standings from "../components/standings";



function HomePage() {

    return(
        <div className="min-w-screen grid grid-cols-1 md:grid-cols-3 md:gap-40 md:px-20 md:py-20">
            <Standings/>
            <ScoreBoard/>
        </div>
    )
}

export default HomePage;