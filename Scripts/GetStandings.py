from espn_api.football import League
import mysql.connector
from configparser import ConfigParser
from GetMedianScores import getMediansForWeek
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
sqlQuery = "INSERT INTO teams (team_id, team_name, team_wins, team_ties, team_losses, weeks_above_median,standing, standing_vs_median, points_for, points_against, team_owner, logo_url) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
for i in league.teams:
    weeks_above_median = 0
    standing_vs_median = i.wins
    for k in range(1,12):
        median = getMediansForWeek(league,k)
        if(i.scores[k-1] > median):
            weeks_above_median += 1
            standing_vs_median += 0.5
    myscursor.execute(sqlQuery, (i.team_id, i.team_name, i.wins, i.ties, i.losses, weeks_above_median,i.standing, standing_vs_median, i.points_for, i.points_against, i.owner, i.logo_url))
    db.commit()