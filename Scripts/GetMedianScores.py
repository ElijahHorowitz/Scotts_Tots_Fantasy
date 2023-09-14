from espn_api.football import League
import mysql.connector
from configparser import ConfigParser
import numpy as np

file = 'dbConfig.ini'
config = ConfigParser()
config.read(file)
configUsed = 'DEVCONFIG'

#connect to db
db = mysql.connector.connect(
    host=config[configUsed]['host'],
    user=config[configUsed]['user'],
    passwd=config[configUsed]['passwd'],
    database=config[configUsed]['database']
)

myscursor = db.cursor()

#open league
league = League(league_id=87839287, year=2022)

sqlQuery = "INSERT INTO medians (Week, Year, Median) VALUES (%s, %s, %s)"

#Funtion to get and return median for certain week of year
def getMediansForWeek(league,week):
    leagueScoreboard = league.scoreboard(week)
    scoresArr = np.array([])
    for k in range(0,6):
        scoresArr = np.append(scoresArr, leagueScoreboard[k].home_score)
        scoresArr = np.append(scoresArr, leagueScoreboard[k].away_score)
    return(np.median(scoresArr))

for i in range(1,12):
    median = getMediansForWeek(league,i)
    week = i
    myscursor.execute(sqlQuery, (week, 2022, median))
    db.commit()
