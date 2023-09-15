# Scotts_Tots


# Start Service on ec2 instance
sudo systemctl start ScottsTots.service

# Check status of service
sudo systemctl status ScottsTots.service

# Stop service on ec2 instance
sudo systemctl stop ScottsTots.service

# tell Git to stop ignoring this file
$ git update-index --no-assume-unchanged <file-to-ignore>

# stash your local changes to the file
$ git stash <file-to-ignore>

# Pull from remote
$ git pull

# Apply your stashed changes and resolve the possible conflict
$ git stash apply

# Now tell Git to ignore this file again
$ git update-index --assume-unchanged <file-to-ignore>

#Connect to mysql 
mysql -h scotstotsprod.c3lgbntvdz6f.us-east-2.rds.amazonaws.com -P 3306 -u admin -p

Link to prod website https://www.scottstotsfantasy.com