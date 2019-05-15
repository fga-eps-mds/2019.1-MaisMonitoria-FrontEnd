export const validateRegister = user => {
    const {email,password,course,name} = user;
    
    if(email === '' || password === '' || name === '' || course === '') return false;
    return true;
    
}
export const validateName = user => {
    const {name} = user;
    
     var regex = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
     if(name.match(regex))
     {

     }
     else{
         return false;
     }

    return true;
    
}
export const success=({status})=> status >=200 && status <=300;