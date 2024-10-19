const fs = require('fs');
fs.writeFile('Results.md', "| Root Domain | Number of HttpOnly | Number of Secure | Number of SameSite | Number of Lax | Number of Strict | Number of None | Termination Code |\n", (err)=>{
    if(err) throw err;
});
fs.appendFile('Results.md', "| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n", (err)=>{
    if(err) throw err;
});
var average
fs.readFile('Sites.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    data=data.split('\r\n');
    for(var i=0;i<data.length;i++){
        fetch('https://'.concat(data[i])).then((response)=>{
            cookies=response.headers.getSetCookie();
            var HttpOnly=0;
            var Secure=0;
            var sameSite=[0,0,0,0];
            for(var i=0;i<cookies.length;i++){
                cookie=cookies[i].toLowerCase();
                if(cookie.includes('httponly')){
                    HttpOnly++;
                }
                if(cookie.includes('secure')){
                    Secure++;
                }
                if(cookie.includes('samesite')){
                    sameSite[0]++;
                    if(cookie.includes('samesite=lax')){
                        sameSite[1]++;
                    }
                    else if(cookie.includes('samesite=strict')){
                        sameSite[2]++;
                    }
                    else if(cookie.includes('samesite=none')){
                        sameSite[3]++;
                    }
                }
            }
            results = "| ".concat(data[i]," | ",HttpOnly," | ",Secure," | ",sameSite[0]," | ",sameSite[1]," | ",sameSite[2]," | ",sameSite[3]," | ",response.status," |\n")
            fs.appendFile('results.md', results, (err)=>{
                if (err) throw err;
            })
        }).catch((e)=>{
            console.log(e)
        });
    }
});

