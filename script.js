let userscore = 0;
let compscore = 0;
const scorebyUser = document.querySelector("#user-score");
const scorebyComp = document.querySelector("#comp-score");
const msgbox= document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msgc");

const gencompchoice = ()=>{
  const option =["Rock","Paper","Scissors"]
  const randomIDX = Math.floor(Math.random () *3);
  return option [randomIDX];

}

const drawgame =()=>{
    console.log("Its a draw");
    msgbox.style.backgroundColor ="blue";
    msgbox.innerText = "Its a draw";
}
const playgame =(userchoice)=>{
    console.log(`user choosed ${userchoice}`);
    const compchoice = gencompchoice();
    console.log(`Comp choose ${compchoice}`);

    if(userchoice === compchoice ){
        drawgame();
        
    }
    else{
         if(
            (userchoice === "Rock" &&  compchoice === "Scissors") || (userchoice === "Paper" &&  compchoice === "Rock" )||( userchoice === "Scissors" &&  compchoice === "Paper" ))
            {
            console.log("userwin");
            userscore ++;
            scorebyUser.innerText = userscore;
        
            msgbox.innerText = " Congo !! you Won!! ";
            msgbox.style.backgroundColor ="green";
           
          }
          else{
            
            console.log("comp won");
            scorebyComp.innerText = compscore;
            compscore ++;
            msgbox.innerText = " you lose!!try again ";
            msgbox.style.backgroundColor ="red";       
          }
                
        }

    }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
 })
})