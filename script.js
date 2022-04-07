function updateclock(){
    let now = new Date();
    
    let wday = now.getDay(),
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
        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0+n);
            return n;
        }

        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let wdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"]; 
        let elements = ["wday","month","mday","year","hour","minute","second","period"];
        let values = [wdays[wday], months[month], mday.pad(2), year, hou.pad(2), minute.pad(2), second.pad(2), per];

       

        for(i=0; i< elements.length; i++){
            document.getElementById(elements[i]).firstChild.nodeValue = values[i]
        }
}

function initclock(){
    setInterval("updateclock()",1);
    console.log("Test");


}