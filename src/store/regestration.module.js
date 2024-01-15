
const intitialState={
    fname:'',
    lname:'',
    birthday:'',
    gender:'',
    email:'',
    password:'',
    auth:false


}
export const regestration = {
    state : {
        ...intitialState
    },
mutations : {
    updateRegistrationData(state, formData) {
        Object.assign(state, formData);
    } , 
    AutorizeUser(state) {
        state.auth =true
    }
},
    actions: {
            submitRegestrationForm({commit} , data){
            commit('updateRegistrationData'  , data)
            } ,
          



            login({ commit, state }, credentials) {
                // Assuming state contains user credentials like state.email and state.password
                if (state.email === credentials.email && state.password === credentials.password) {
                  commit('AutorizeUser');
                  return true; // Login successful
                } else {
                  return false; // Login failed
                }
              }








    }
   
}