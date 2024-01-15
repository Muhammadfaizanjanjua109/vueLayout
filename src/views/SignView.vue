<script>
export default {
    name: 'signup',
    data() {
        return {
            fname: '',
            lname: '' ,
            birthday:'',
            gender:'',
            email:'',
            password:''

        }
    },
    methods: {
        handleSubmit(e) {
e.preventDefault()

const regData= {
    fname: this.fname,
        lname: this.lname,
        birthday: this.birthday,
        gender: this.gender,
        email: this.email,
        password: this.password,
}
this.$store.dispatch('submitRegestrationForm' , regData)
this.$router.push('/login');
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
                        <h2 class="title">Registration Form</h2>
                        <form @submit="handleSubmit">
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">first name</label>
                                        <input class="input--style-4" type="text" name="fname" v-model="fname" >
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">last name</label>
                                        <input class="input--style-4" type="text" name="lname" v-model="lname" >
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Birthday</label>
                                        <div class="input-group-icon">
                                            <input class="input--style-4 js-datepicker" type="date" name="birthday" v-model="birthday" >
                                            <!-- <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <label class="label">Gender</label>
                                        <div class="p-t-10">
                                            <label class="radio-container m-r-45">Male
                                                <input type="radio" checked="checked" name="gender"  v-model="gender" >
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container">Female
                                                <input type="radio" name="gender"   v-model="gender" >
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        <input class="input--style-4" type="password" name="password" v-model="password">
                                    </div>
                                </div>
                            </div>
                          
                            <div class="p-t-15">
                                <button class="btn btn--radius-2 bg-dark" type="submit">Submit</button>
                        </div>
                    </form>
                   <div class="d-flex">
                    <p>Already Regestered ?</p>
<p class="link-primary cursorPointer"> <router-link to="/login">Login</router-link></p>

                   </div>
                </div>
            </div>
        </div>
    </div>

</div>



</template>