<template>
  <div class="reservation-users">
      <ul class="list-group">
            <li v-for="(reservation, resID) in allReservations" :key = "resID" class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span class="res-name">{{reservation.fullName}}</span> 
                            <br/>{{reservation.resDate}} Party of {{reservation.partySize}} 
                    </div>
                    <div class="col d-flex justify-content-end align-items-center">
                        <div class="gap-2 ">
                            <button @click = "notifyReservation(reservation.guestID)" class="btn btn-controls btn-primary block btn-block">Notify</button> 
                            <button @click = "deleteReservation(reservation.resID)" class="btn btn-controls btn-danger block btn-block btn-delete">Delete</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            reservations:''
        }
    },
    methods:{
        notifyReservation(id){
            console.log(id);
        },
        deleteReservation(id){
            console.log(id);
            console.log(this.allReservations) 
            this.$store.dispatch("dispatchDeleteReservation", id)
        }
    },
    mounted(){
        this.$store.dispatch("dispatchAllReservations")
        console.log(this.reservations)
    },  
    computed:{
        allReservations(){
            let res = this.$store.state.allReservations;
            return res;
        }   
    }
}
</script>

<style>
.btn-controls{
    min-width: 80px;
}
.res-name{
    font-size:1.4em;
}
.btn-delete{
    margin-left:10px;
}
</style>