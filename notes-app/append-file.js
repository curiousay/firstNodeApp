const fs = require('fs');

fs.writeFileSync("appended-notes.txt", "My name is SAYALI NAZARE");
fs.appendFileSync("appended-notes.txt", "\nI am learning node from UDEMY");