<template>
  <div class="customer">
      <div class="container mt-4">
          <div class="row">
              <div class="col-6">
                  <div class="card">
                      <div class="card-body">
                          <h2>Reservations</h2>
                            <ul class="list-group">
                                <li v-for="(reservation,index) in currentUser" :key="index" class="list-group-item"> 
                                    Party Size: {{reservation.partySize}} &nbsp;&nbsp; Reservation ID: {{reservation.resID}}<br/>
                                    Reservation Date: {{reservation.resDate.substring(0,9)}} @ {{reservation.resDate.substring(11,16)}}
                                    </li>
                            </ul>
                      </div>
                  </div>
              </div>
              <div class="col-6">
                  <div class="card">
                      <div class="card-body">
                          <h2>{{userData.fullName}}</h2>
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
        let res = this.$store.state.user.reservations[0].resDate;
        console.log(res.getDay);
        let date = new Date();
        let unixtime = Date.parse(res.resDate)
        console.log(unixtime); 
        
    },
    computed:{
        userData(){
            let username = this.$store.state.user;
            return username
        },
        currentUser(){
            let reservations = this.$store.state.user.reservations;
            return reservations
        },
        test(){//Line 18 variable
            
            let message = 'Past Reservations'
            return message;
        }
    }
}
</script>

<style>

</style>