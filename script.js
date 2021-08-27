const names = ["Yaakov", "John", "Jen", "jason","paul","frank","larry","paula","laura","jim"];

 

 let text ="<ul>";
names.forEach(myFunction);
text += "</ul>";
document.getElementById("demo").innerHTML = text;

 

 

 

function myFunction(value) {
  if(value.charAt(0)==='J'|| value.charAt(0)==='j'){
       text+="<li>"+"Goodbye "+value+"</li>"
    }
    else{
        text+="<li>"+"Hello "+value+"</li>"
        }

 

    } 
