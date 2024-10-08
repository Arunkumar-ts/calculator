var input=document.getElementById("input");
    function addnum(inp){
        if(input.value!="Error"){
            input.value+=inp;
        }
    }
    function equl(){
        try{
            if(input.value!="" && input.value!="Error"){
                input.value=eval(input.value);
            }
        }
        catch(error){
            input.value="Error";
            input.style.color="red";
        };
    }
    function clearfn(){
        input.value="";
        input.style.color="White";
    }
    function removefn(){
        if(input.value!="Error"){
            input.value=input.value.slice(0,-1);//here i do not know what is it slice()
        }
    }