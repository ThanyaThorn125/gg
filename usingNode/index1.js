fs.writeFile("massage.txt","Hello from NodeJS!",(err)=>{
    if (err) throw err;
    console.log("The file has been saved!");
});