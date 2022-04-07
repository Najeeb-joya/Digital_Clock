function updateclock(){
    let now = new Date();
    
    var wday = now.getDay(),
        month = now.getMonth(), 
        mday  = now.getDate(),
        year = now.getFullYear(), 
        hou = now.getHours(), 
        minute = now.getMinutes(), 
        second = now.getSeconds(), 
        per = "AM";

        if(hou == 0){
            hou = 12; 
        }
        if(hou > 12 ){
            hou = hou - 12;
            per = "PM"
        }

        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let wdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"]; 
        let elements = ["wday","month","mday","year","hour","minute","second","period"];
        let values = [wdays[wday], months[month], mday, year, hou, minute, second, per];

       

        for(i=0; i< elements.length; i++){
            document.getElementById(elements[i]).firstChild.nodeValue = values[i]
        }


}


function initclock(){
    setInterval("updateclock()",1);
    console.log("Test");


}