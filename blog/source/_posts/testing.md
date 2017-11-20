title: Fun with linux web server creation
tags:
  - linux
categories: []
date: 2017-11-19 22:51:00
---
Currently I've got a full web server running in the cloud on ubuntu linux.  nginx is the webserver handling the traffic on http (port 80) and https (port 443).  It hands all traffic off to port 8080 which is where Node/Express will live.  This is called a `reverse proxy`

It's pretty easy to set up nginx as a reverse proxy to node/express with a little google-Fu:   http://blog.danyll.com/setting-up-express-with-nginx-and-pm2/

Once you get that running you can get a FREE ssl cert (these used to cost money!) from The EFF.   Certbot will even configure your nginx for you to forward port 80 to port 443.  The instructions are fantastic, and you can set a cron job to automatically renew your certs. https://certbot.eff.org/

So now express is still LISTENING on port 8080 (or whatever port you're using) and you need to keep that locked down - especially if you have stuff you want kept away from the probing bots.  So Uncomplicated Firewall jumps in...

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-14-04

basically with very little effort you close off all traffic except port 80, port 443, and port 22 (ssh) to the outside world.  Mysql still runs on 3306 but its only accessible from itself (localhost).

Some people change the default port for ssh to a non standard port, and close down 22, but I prefer to just change it so remote root logins are not allowed.

Apparently, express has its own little tutorial as well: https://expressjs.com/en/advanced/best-practice-security.html