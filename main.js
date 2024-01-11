document.write("58. to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above."+"<br>");
function test58(str){
    if(str.length>=3){
        var x=str.substring(str.length-3);
        return x.repeat(4);
    }
    return false;
}
document.write("The string :sanjeev ,Ans :"+test58("sanjeev")+"<br>");
document.write("The string :Python ,Ans :"+test58("Python")+"<br><br>");