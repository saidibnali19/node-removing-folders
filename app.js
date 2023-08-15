const fs = require("fs")

const folderName = "users"

fs.rmdir(folderName, error => {
    if (error) throw error
    console.log(`'${folderName}' has been deleted`)
})