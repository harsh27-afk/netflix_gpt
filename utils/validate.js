export const validate=(email, password)=>{
    let isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    let isPasswordValid=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,50}$/.test(password);

    if(!isEmailValid) return "email is not valid";
    if(!isPasswordValid) return "password is not valid"

    return null;

}