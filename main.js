function displayfunc(number){

    // document.getElementById('display').innerHTML=num;
    document.form.textarea.value = document.form.textarea.value + number;
    

}

function light(){
    return document.getElementById('light').style.backgroundColor='#fff200';
}

function lightoff(){
    return document.getElementById('light').style.backgroundColor='rgb(240, 255, 255)';
}

function clean(){
    document.form.textarea.value = "";
}

function back(){
    var backk = document.form.textarea.value;
    document.form.textarea.value = backk.substring(0,backk.length -1);
}

function hesabla(){
    var hesab=document.form.textarea.value;
    document.form.textarea.value = eval(hesab);
}