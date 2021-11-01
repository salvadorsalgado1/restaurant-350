<template>
  <div class="reservation-users">
      <ul class="list-group">
            <li class="list-group-item">
                <div class="row">
                    <div class="col">
                        <span class="res-name">John Smith</span> 
                            <br/>4:00PM Party of 5 
                    </div>
                    <div class="col d-flex justify-content-end align-items-center">
                        <div class="gap-2 ">
                            <button class="btn btn-controls btn-primary block btn-block">Call</button> 
                            <button class="btn btn-controls btn-danger block btn-block btn-delete">Delete</button>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item">Maria Lindsey 5:00PM<br/>Party of 2 </li>
            <li class="list-group-item">David Matt 6:00PM<br/>Party of 9 </li>
        </ul>
  </div>
</template>

<script>
export default {
   

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