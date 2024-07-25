const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗜cεε 𝗕" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131808050";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349131808050,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_06_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMyLFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgODksXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicnNoY21BZDIrdzU1NjVQV3ZDQlZMY0lVRHZsWEpiZHc2dmxzU3RFNFVYcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSVd6enNjS2hRLUNDcmhWdEZ6RWFoUVwiLFxuICBcInBob25lSWRcIjogXCJiNWI4MDkxOS05YjdmLTQ4ZDktODk5Zi04OGJkYzdiMTdlMmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgODIsXG4gICAgICAxNTEsXG4gICAgICAyMDAsXG4gICAgICAxMDAsXG4gICAgICAyNDYsXG4gICAgICA0NCxcbiAgICAgIDE0NSxcbiAgICAgIDE0NixcbiAgICAgIDIyMyxcbiAgICAgIDEwNixcbiAgICAgIDI0MCxcbiAgICAgIDE2NixcbiAgICAgIDEzNCxcbiAgICAgIDIyNixcbiAgICAgIDE4OCxcbiAgICAgIDIzNSxcbiAgICAgIDIxNCxcbiAgICAgIDIyNSxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDE5OCxcbiAgICAgIDIzMyxcbiAgICAgIDY3LFxuICAgICAgNjQsXG4gICAgICAyNCxcbiAgICAgIDQxLFxuICAgICAgMjQsXG4gICAgICA3MixcbiAgICAgIDE0LFxuICAgICAgMTM2LFxuICAgICAgMTEwLFxuICAgICAgMjM0LFxuICAgICAgMTgyLFxuICAgICAgMzUsXG4gICAgICAxMTMsXG4gICAgICAxODAsXG4gICAgICAyMDksXG4gICAgICAxMzgsXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzdQMVoxV1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwOTExMTQ0OTk6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3ODI2MDExOTAyMDIzOjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04zZm5jY0xFT0h2aWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiREN6K0theng1QkxTNlFKNm9iUDRjQjUvZkFZVmpjOW94RHdDNWtUUENuYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnVEJRK01xSHBGZ0I3Q09OL3RSTjBNZnNDOTBLRHpCU05Fc21ub0FiRlNPc3RZdkp3bGdmV2FuTHRSYmlDM3VzZThhY0YvaENqc0xHOHROcFZHZllCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHU2lHdHpqc2tZNUxTNUc0NW5XaUJMUHdQVTltcXdoK3hyMkh4ejY2NjNpb2JqNTZQdUVjQzVHYkZKRHhqYm1KaEwyQ0lLVXZEMStFaHlQY2ltN0pEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDkxMTE0NDk5OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MjM1NTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝗜cεε 𝗕" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗜cεε 𝗕",
  packname: process.env.PACK_NAME || "💵Capo🤍😂",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝗜cεε 𝗕",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
