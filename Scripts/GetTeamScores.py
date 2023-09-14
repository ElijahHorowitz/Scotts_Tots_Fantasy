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
sqlQuery = "INSERT INTO teamscores (team_name, week, team_id, score) VALUES(%s,%s,%s, %s)"
for i in league.teams:
    week = 1
    for k in i.scores:
        if(week < 12):
            myscursor.execute(sqlQuery, (i.team_name, week, i.team_id, k))
            db.commit()
            week+=1
        else:
            break
