<template>
    <div class="reservation container mt-4">
      <div class="card shadow p-3 mb-5 bg-body rounded">
      <div class="card-body">
        <h1 class="heading-h1-reservations">Create a Reservation</h1>
        <form @submit.prevent="createReservation">
      <div class="row mb-4"> 
      </div>
      <div class="row mb-4">
        <div class="col-sm-12 col-md-6">
          <div>
            <label class="form-label">Reservation Time</label>
            <select class="form-select" aria-label="Default select example" v-model="selectTime">
                <option selected>Time</option>
                <option value="11:00:00'">11:00AM</option>
                <option value="12:00:00">12:00PM</option>
                <option value="13:00:00">1:00PM</option>
                <option value="14:00:00">2:00PM</option>
                <option value="15:00:00">3:00PM</option>
                <option value="16:00:00">4:00PM</option>
                <option value="17:00:00">5:00PM</option>
                <option value="18:00:00">6:00PM</option>
                
            </select>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
            <label class="form-label">Reservation Size</label>
            <select v-model="resSize" class="form-select" aria-label="Default select example">
                <option selected>Reservation Size</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </div>
      </div>
      <button class="btn btn-primary mt-4">Submit</button>
    </form>
      </div>
    </div>
  </div> 
</template>

<script>
 export default {
  data(){
    return{
      sample:"2021-10-31 23:21:19",
      selectTime:'',
      resSize:''
    }
  },
  methods:{
    createReservation(){
      let date = new Date();
      let month = date.getDay();
      let year = date.getFullYear();
      let day = date.getDate();
      let submitReservation = `${year}-${month}-${day} ${this.selectTime}`;
      let partySize = this.resSize;
      let guestID = this.$store.state.user.guestID;
      this.$store.dispatch('submitReservation', {reservationTime:submitReservation, resSize:partySize, id:guestID})
    }
  },
  computed:{
        currentDate(){
            let date = new Date();
            let month = this.$store.state.month[date.getMonth()];
            let day = date.getDate();
            return {month:month, day:day};
        },
        doDate(){
          let date = new Date("2021-10-31 23:21:19");
          return date;
        }
    },
    
  
}
</script>

<style>

</style>