<script>
 export  default  {
name:'login',
data() {
    return {
        email:'',
        password:'',
    }
},
methods : {
    handleSubmit(e){
        e.preventDefault()



  this.$store.dispatch('login', { email: this.email, password: this.password })
        .then((loginSuccessful) => {
          if (loginSuccessful) {
            // Navigate to the dashboard or another authenticated route
            this.$router.push('/dashboard');
          } else {
            // Handle failed login (show an error message, etc.)
            console.error('Login failed');
          }
        })
        .catch((error) => {
          // Handle errors if needed
          console.error('Error during login:', error);
        });
    }
}
 }
</script>
<template>
    <div class="signup">
        <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div class="wrapper wrapper--w680">
                <div class="card card-4">
                    <div class="card-body">
                        <h2 class="title fw-bolder">Login Form</h2>
                        <form @submit="handleSubmit">
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Email</label>
                                        <input class="input--style-4" type="email" name="email" v-model="email">
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Password</label>
                                        <input class="input--style-4" type="text" name="password" v-model="password">
                                    </div>
                                </div>
                            </div>
                          
                            <div class="p-t-15">
                                <button class="btn btn--radius-2 bg-primary" type="submit">Login</button>
                        </div>
                    </form>
                   <div class="d-flex">
                    <p>Not Regestered ?</p>
<p class="link-primary cursorPointer"> <router-link to="/">Sign Up</router-link></p>

                   </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>