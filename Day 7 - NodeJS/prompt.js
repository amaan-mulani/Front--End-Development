import prompt from "prompt";
import chalk from "chalk";

prompt.start();

prompt.get(['username','password'], function(err,result){
    if(result.username==='admin' && result.password==='admin')
    {
        console.log(chalk.bold.greenBright('Login Successful!'));
    }
    else
    {
        console.log(chalk.bold.redBright('Login Failed!'));
    }
});
