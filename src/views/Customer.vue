<template>
  <div class="customer">
      <div class="container mt-4">
          <div class="row">
              <div class="col-6">
                  <div class="card">
                      <div class="card-body">
                          <h2>Current Reservations</h2>
                            <ul class="list-group">
                                <li class="list-group-item"> Reservation Data</li>
                            </ul>
                      </div>
                  </div>
              </div>
              <div class="col-6">
                  <div class="card">
                      <div class="card-body">
                          <h2>{{test}}</h2>
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
    computed:{
        currentUser(){
            let reservations;




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