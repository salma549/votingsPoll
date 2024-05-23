
let rcbVotecount = 0; 
let sunrisersVotecount = 0; 
let kkrVotecount = 0; 

let totalVotes = 0;

function rcbVotes() {
   rcbVotecount++;
    totalVotes++;
    stopVotes(totalVotes)
    //console.log(`Votes of Salma ${salmaVotecount}`);
    //console.log(`totalVotes  ${totalVotes}`); 
}

function sunrisersVotes() {
    sunrisersVotecount++;
    totalVotes++;
    stopVotes(totalVotes)
    //console.log(`Votes of Zeenath ${zeenathVotecount}`);
   //console.log(`totalVotes ${totalVotes}`);

}

function kkrVotes() {
  kkrVotecount++;
    totalVotes++;
    stopVotes(totalVotes)
 
    //console.log(`Votes of tarannum ${tarannumVotecount}`)
    //console.log(`totalVotes ${totalVotes}`);
    
}


function stopVotes(votes) {

    if (totalVotes >= 8) {
 
        document.getElementById("rcb").disabled = true

        document.getElementById("sunrisers").disabled = true

        document.getElementById("kkr").disabled = true

        document.getElementById("display-text").innerHTML = 'Votings are Closed'

        alert('Votings are closed')

        console.log(`Total votes of Royal Challengers Bengaluru ${rcbVotecount}`);

        console.log(`Total votes of Sunrisers Hyderabad ${sunrisersVotecount}`);

        console.log(`Total votes of Kolkata Knight Riders ${kkrVotecount}`);

        let Winner;
       
        console.log('Winner among Royal Challengers Bengaluru , Sunrisers Hyderabad , Kolkata Knight Riders ')
        
        Winner = rcbVotecount > sunrisersVotecount ? 'Royal Challengers Bengaluru' : (sunrisersVotecount > kkrVotecount ? ' Sunrisers Hyderabad' : 'Kolkata Knight Riders')
        
        console.log('Winner is', Winner)
        
        alert(`The Winner is ${Winner}`)

        document.getElementById("text").innerHTML = `Winner is ${Winner}`
       
    }
}



