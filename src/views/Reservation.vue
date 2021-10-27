<template>
 
    <div class="reservation container mt-4">
      <div class="card shadow p-3 mb-5 bg-body rounded">
      <div class="card-body">
        <h1 class="heading-h1-reservations">Make a Reservation</h1>
        <form>
      <div class="row mb-4">
        <div class="col">
          <div>
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control" id="" aria-describedby="">
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <div>
            <label class="form-label">Phone Number</label>
            <input type="text" class="form-control" id="" aria-describedby="">
          </div>
        </div>
        <div class="col">
          <div>
            <label class="form-label">Email</label>
            <input type="email" class="form-control" id="" aria-describedby="">
          </div>
        </div>
      </div>
      <div class="row mb-4">
         
        <div class="col">
          <div>
            <label class="form-label">Reservation Time</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Time</option>
                <option value="1">10:00</option>
                <option value="2">10:30</option>
                <option value="3">11:00</option>
                <option value="4">12:00PM</option>
                <option value="5">12:30PM</option>
                <option value="6">1:00PM</option>
                <option value="7">1:30PM</option>
                <option value="8">2:00PM</option>
                <option value="9">2:30PM</option>
            </select>
          </div>
        </div>
        <div class="col-6">
            <label class="form-label">Reservation Size</label>
            <select class="form-select" aria-label="Default select example">
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

}
</script>

<style>

</style>