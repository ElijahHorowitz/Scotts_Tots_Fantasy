from espn_api.football import League
import mysql.connector
from configparser import ConfigParser

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

sqlQuery = "INSERT INTO scoreboards (home_team, home_score, away_team, away_score, week) VALUES (%s,%s,%s,%s,%s)"
scoreboards = []
for i in range(1,12):
    scoreboards = league.scoreboard(i)
    for k in range(0,6):
        home_team = str(scoreboards[k].home_team)[5:-1]
        home_score = scoreboards[k].home_score
        away_team = str(scoreboards[k].away_team)[5:-1]
        away_score = scoreboards[k].away_score
        week = i
        myscursor.execute(sqlQuery, (home_team, home_score, away_team, away_score, week))
        db.commit()