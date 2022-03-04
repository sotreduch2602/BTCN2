var tinh=document.querySelector(".btn")
var phep=document.getElementsByName("calculate")
var input1=document.querySelector(".inputNumber1")
var input2=document.querySelector(".inputNumber2")

input1.addEventListener('blur',function(){
    if (input1.value.length == 0){
        document.getElementById("T").innerHTML="Vui lòng nhập ô thứ nhất"
        return
    }
    else{
        document.getElementById("T").innerHTML=""
    }

    if (isNaN(parseInt(input1.value))){
        document.getElementById("T").innerHTML="Vui lòng nhập số thực vào ô thứ nhất"
        return
    }
    else{
        document.getElementById("T").innerHTML=""
    }
})

input2.addEventListener('blur',function(){
    if (input2.value.length == 0){
        document.getElementById("T").innerHTML="Vui lòng nhập ô thứ hai"
        return
    }
    else{
        document.getElementById("T").innerHTML=""
    }

    if (isNaN(parseInt(input2.value))){
        document.getElementById("T").innerHTML="Vui lòng nhập số thực vào ô thứ hai"
        return
    }
    else{
        document.getElementById("T").innerHTML=""
    }
})

tinh.addEventListener('click',function(){
    var x = parseInt(document.getElementById("x").value)
    console.log(x)
    var y = parseInt(document.getElementById("y").value)
    console.log(y)

    function sum(x,y) {
        sum=x+y;
        return sum;
    }
    function sub(x,y) {
        sub=x-y;
        return sub;
    }
    function mul(x,y) {
        mul=x*y;
        return mul;
    }
    function div(x,y) {
        div=x/y;
        return div;
    }

    if(isNaN(x) || isNaN(y)){
        document.getElementById("T").innerHTML="Vui lòng nhập số thực"
        return
    }
    else{
        if(!document.getElementById("cong").checked && 
            !document.getElementById("tru").checked &&
            !document.getElementById("nhan").checked &&
            !document.getElementById("chia").checked
        ){
        document.getElementById("T").innerHTML="Vui lòng chọn phép tính"
        }

        if (document.getElementById("cong").checked){
            k = sum(x,y);
            //console.log(k);
            document.getElementById("K").value = k;
            document.getElementById("T").innerHTML="Success"
            return
        }
        else{
            //console.log("cong false")
        }
    
        if (document.getElementById("tru").checked){
            k = sub(x,y);
            //console.log(k);
            document.getElementById("K").value = k;
            document.getElementById("T").innerHTML="Success"
            return
        }
        else{
            //console.log("tru false")
        }
    
        if (document.getElementById("nhan").checked){
            k = mul(x,y);
            //console.log(k);
            document.getElementById("K").value = k;
            document.getElementById("T").innerHTML="Success"
            return
        }
        else{
            //console.log("nhan false")
        }
    
        if (document.getElementById("chia").checked){
            k = div(x,y);
            //console.log(k);
            document.getElementById("K").value = k;
            document.getElementById("T").innerHTML="Success"
            return
        }
        else{
            //console.log("div false")
        }
    }
})
