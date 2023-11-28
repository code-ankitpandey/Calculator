
function appendToResult(value){
    document.getElementById('result').value+=value;
    
}
function clearResult(){
    document.getElementById('result').value='';
}
function result(){
    try{
        var cal=eval(document.getElementById('result').value);
        document.getElementById('result').value=cal;
    }
    catch{
        document.getElementById('result').value='error';
    }
}