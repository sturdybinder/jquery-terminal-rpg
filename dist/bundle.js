(()=>{const e=["Let's begin.","Rock.","Paper.","Scissors.","Shoot!\n"],o=["Hello! Welcome to my rock paper scissors computer","You will really feel like a hackerman playing this version of rock paper scissors","To start just type 'Play' or /help if you need assistance."].join("\n");async function t(e,o){for(let t of o)await new Promise((e=>setTimeout(e,500))),e.echo(t)}function s(e,o,t){return"rock"==o&&"scissors"==t||"paper"==o&&"rock"==t||"scissors"==o&&"paper"==t?(e.echo("You WIN!"),"player"):o==t?(e.echo("WOW, it's a tie!"),"tie"):(e.echo("You LOSE!"),"computer")}$("#terminal").terminal((async function(o,r){if("play"===o||"Play"===o)!async function(o){let r=0,i=0;for(let a=0;a<5;a++){o.echo(`\nRound ${a+1}:`),await new Promise((e=>setTimeout(e,200))),await t(o,e);let n=await o.read("Please enter your selection (rock, paper, scissors): \n> ");if(!["rock","paper","scissors"].includes(n.toLowerCase())){o.echo("Invalid selection. Please try again."),a--;continue}await new Promise((e=>setTimeout(e,500)));const c=["rock","paper","scissors"][Math.floor(3*Math.random())];o.echo(`\nThe computer chooses ${c}\n`),await new Promise((e=>setTimeout(e,500)));let p=s(o,n.toLowerCase(),c);"player"===p?r++:"computer"===p&&i++}o.echo(`Player wins: ${r}`),o.echo(`Computer wins: ${i}`),i>r?o.echo("The Computer wins the series."):i<r?o.echo("The Player wins the series."):o.echo("It's a tie!")}(r);else if("/help"===o)r.echo("If you're having trouble, just type 'Play' to start a game!");else{const e=`User input: ${o}\nAI response:`,t=await fetch("https://api.openai.com/v1/completions",{body:JSON.stringify({model:"text-davinci-002",prompt:e,temperature:.7,max_tokens:128,stop:["\n"]}),method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer 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"}});if(t.ok){const e=(await t.json()).choices[0].text.trim();r.echo(e)}else r.echo("Error fetching response from OpenAI API.")}}),{greetings:o,height:400,width:800,prompt:"> "})})();