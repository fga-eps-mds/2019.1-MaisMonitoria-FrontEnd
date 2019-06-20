export const validateRegister = user => {
    const {email,password,course,name, telegram} = user;
    
    if(email === '' || password === '' || name === '' || course === '' || telegram === '') return false;
    return true;
    
}

export const validateName = user => {
    const {name} = user;
    
     var regex = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\- \s]+$/;
     if(name.match(regex))
     {

     }
     else{
         return false;
     }

    return true;
    
}

export const validatepasswordconfirm = user => {
    const {password,passwordconfirm} = user;
    
     if(password !== passwordconfirm) return false;

     return true;
    
}

export const validateRegisterMonitoring = Monitoring => {
    const {name,subject,description} = Monitoring;
    
     if(!name  || !subject || !description) return false;

     return true;
    
}

export const validateEditProfile= Monitoring => {
    const {name,telegram,course} = Monitoring;
    
     if(!name  || !telegram || !course ) return false;

     return true;
    
}

export const validateEditMonitoring= Monitoring => {
    const {name,subject,description} = Monitoring;
    
     if(!name  || !subject || !description ) return false;

     return true;
    
}

export const success=({status})=> status >=200 && status <=300;