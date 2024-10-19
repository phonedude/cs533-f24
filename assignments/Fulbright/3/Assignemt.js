const fs = require('fs');
fs.writeFile('Results.md', "\"Root Domain\", \"Number of HttpOnly\", \"Number of Secure\", \"Number of SameSite\", \"Number of Lax\", \"Number of Strict\", \"Number of None\", \"Termination Code\"\n", (err)=>{
    if(err) throw err;
});
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
                if(cookies[i].includes('HttpOnly')){
                    HttpOnly++;
                }
                if(cookies[i].includes('Secure')){
                    Secure++;
                }
                if(cookies[i].includes('SameSite')){
                    sameSite[0]++;
                    if(cookies[i].includes('SameSite=lax')){
                        sameSite[1]++;
                    }
                    else if(cookies[i].includes('SameSite=strict')){
                        sameSite[2]++;
                    }
                    else if(cookies[i].includes('SameSite=none')){
                        sameSite[3]++;
                    }
                }
            }
            results = "\"".concat(data[i],"\",","\"",HttpOnly,"\",","\"",Secure,"\",","\"",sameSite[0],"\",","\"",sameSite[1],"\",","\"",sameSite[2],"\",","\"",sameSite[3],"\",","\"",response.status,"\"\n")
            fs.appendFile('results.md', results, (err)=>{
                if (err) throw err;
            })
        }).catch((e)=>{
            console.log(e)
        });
    }
});

