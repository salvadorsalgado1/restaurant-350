<template>
  <div class="customer">
      <div class="container mt-4">
          <div class="row">
              <div class="col-md-6 col-sm-12 mt-4">
                  <div class="card">
                      <div class="card-body">
                          <h2>Reservations</h2>
                            <ul class="list-group">
                                <li v-for="(reservation,index) in currentUser" :key="index" class="list-group-item"> 
                                    Party Size: {{reservation.partySize}} &nbsp;&nbsp; Reservation ID: {{reservation.resID}}<br/>
                                    Reservation Date: {{reservation.resDate.substring(0,8)}} @ {{reservation.resDate.substring(9,14)}}
                                </li>
                            </ul>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 mt-4">
                  <div class="card">
                      <div class="card-body">
                          <h2>{{userData.fullName}}</h2>
                          <p>Role: {{userRole}}</p>
                            <p>
                                Phone Number: <br/>
                                {{userData.phoneNumber}}
                            </p>
                            <p>
                                Email: <br/>
                                {{userData.email}}
                            </p>
                            <p>
                                Guest ID: <br/>
                                {{userData.guestID}}
                            </p>
                        
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:"Customer",
    data(){
        return{
            
        }
    },
    mounted(){
        let id = this.$store.state.user.guestID;
        console.log(id)
        this.$store.dispatch("dispatchReservations", id)
    },
    computed:{
        userRole(){
            let role = this.$store.state.role
            return role;
        },
        userData(){
            let username = this.$store.state.user;
            return username
        },
        currentUser(){
            let reservations = this.$store.state.reservations;
            return reservations
        },
    }
}
</script>

<style>

</style>