const endDate= new Date("23 may,2026 17:49:00").getTime();
const startDate=new Date().getTime();
let x=setInterval(function updateTimer(){
    const now=new Date().getTime();
    const distanceCovered=now-startDate;
    const distancePending=endDate-now;
    //calculate days,mins,hrs,secs
    const dayINMillis=(24*60*60*1000);
    const onehourINMillis=(60*60*1000);
    const secsINMillis=(1000);
    const days=Math.floor(distancePending/(dayINMillis));
    const hrs=Math.floor((distancePending%dayINMillis)/onehourINMillis);
    const mins=Math.floor((distancePending%(onehourINMillis))/(60*1000));
    const secs=Math.floor((distancePending%(60*1000))/(secsINMillis));
    //populate in ui

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("mins").innerHTML=mins;
    document.getElementById("seconds").innerHTML=secs;
    //width percentage progress bar
    const totalDistance=endDate-startDate;
    const percentageDistance=(distanceCovered/totalDistance)*100;
    document.getElementById("progress-bar").style.width=percentageDistance + "%";
    if(distancePending<0){
        clearInterval(x);
        document.getElementById("container").innerHTML="EXPIRED";
        document.getElementById("progress-bar").style.width="100%";
    }
},1000);