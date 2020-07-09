function rot13(message){
    //your code here
    return message.split('').map((e)=>{
        if (e.match(/^[a-zA-Z]$/)){
            if(e.charCodeAt()>=78 && e.charCodeAt()<=90 || e.charCodeAt()>=110 && e.charCodeAt()<=122) return String.fromCharCode(e.charCodeAt()-13)
            return String.fromCharCode(e.charCodeAt()+13)
        }
        return e
    }).join('');
}
console.log(rot13("Test!"));