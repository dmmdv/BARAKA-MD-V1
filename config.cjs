// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUgxK2NHcU5LOG1yNFpkY01mZWNwU3BwK0JMNHg5N2lTNmdCUlpxSjhWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDBPdmVDRGNsVnpzdXZHM2tVQmpQMXJwaW9rYnJsT29nMkNqTUk4VFJDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SURSMGo5OElQMHplOUh0NkVkam5oZnk4bCtEbWdoODVnSDNQWEM0cjF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmUWVpMnc1ME4xS01NYnJydGxPbEZZUHlyTGxRMC80MlBNQmlTZ2xUaUNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFZUNsT2ZBdCtkUGhlbTZKeXIxTVNnWStlWTdiaDVXMUU2Y1I3bTBkRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNpek8waWwxeDVrRlkrWkd4dEFjS0dZeWxWd0l0N1BMUjJSV2VYcXRIM0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5DNnF6YnoxaG5SV1lkRERZYkRQaVlENzNHUVM4V091d0Q4QXEra3MzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2FhSzVJTWxyL3ZEekYrQ2FlcEdjeHVFQjVyY2lPNWtDVnJ5UmlmRkdWND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBlcGlNcWxsSUdzRStMOHpDNHdmUUxqdmJ0Y01nR2dOQWZxaTloRTlRb0FFVmV1Y3hpTlQvNEQ2TnBRQmNQY0tTZHpUVDZHaTlzTDl2clBIelVVOWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJ4R1crL0YrVG5jV2hkTVc0MEFRZTR5Tmgxa1Z5Ukp0YzlpWDMrUnNoRHVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuWXVyaGlxMVE4aTNzRkpIZXBzWkNBIiwicGhvbmVJZCI6IjAyODFkMjVkLTc1OTctNDNmMS05MjdlLTA1ZjRiZGY0MzJkMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGYytZWnp0d3I2NVRGcldUeHlHM2JFYWEyZTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3lZNTlIZnRBMWlBOWdxVnhPK2VmTEM2alpRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdSWDIyWkdCIiwibWUiOnsiaWQiOiIyNTQ3MDg5MTE1MTU6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTY3JhcHBlciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1dTNzlVRkVLcWVrcmdHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR2VrYW54M3FoOENGNWxneUVDUmJoNktUUXpSSW1ObDF4OHBQR0JhaDQzND0iLCJhY2NvdW50U2lnbmF0dXJlIjoieFBCSUpISy81MisyVU9mMXVFWjlPVU5kQ0hEcFVBSk9wVXR2ZHJVcTRPVDZaMFRpd25aWFVta0RVbVRaeVlTUTNIV2NncE9EV2Z0MWxxKzFPb3FOQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkNMVGo5Syt1UDVibXIxSk41YkRudEpWQVdqTmFVTDN3UGdjdjRGY0lTVjdqMUpXaXh2UVh6SG9YMWExVURrZy9SZEFNT1JlY0VKZ1ozZ1FObit1K2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA4OTExNTE1OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUm5wR3A4ZDZvZkFoZVpZTWhBa1c0ZWlrME0wU0pqWmRjZktUeGdXb2VOKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODM1MjA1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGUksifQ==
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©Baraka Bega",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255762190568",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
