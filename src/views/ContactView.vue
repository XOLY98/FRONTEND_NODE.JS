<template>

  <div class="container text-center">
    <div class="row">
      <div class="formy col">
          <h1>Contact Us</h1>  
          <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3">
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">First name</label>
              <input type="text" class="form-control" id="validationDefault01" name="name" required>
            </div>
            <div class="col-md-4">
              <label for="validationDefault02" class="form-label">Last name</label>
              <input type="text" class="form-control" id="validationDefault02" name="name" required>
            </div>
            <div class="col-md-4">
              <label for="validationDefaultUsername" class="form-label">Username</label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required>
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationDefault03" class="form-label">City</label>
              <input type="text" class="form-control" id="validationDefault03" name="name" required>
            </div>
            <div class="col-md-3">
              <label for="validationDefault04" class="form-label">Province</label>
              <select class="form-select" id="validationDefault04" name="name" required>
                <option selected disabled value="">Choose One</option>
                <option>Western Cape</option>
                <option>Eastern Cape</option>
                <option>Free State</option>
                <option>KwaZulu-Natal</option>
                <option>Limpopo</option>
                <option>Northern Cape</option>
                <option>North West</option>
                <option>Gauteng</option>
                <option>Mpumalanga</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="validationDefault05" class="form-label">Zip</label>
              <input type="text" class="form-control" id="validationDefault05" name="number" required>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
                <label class="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-success" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div class="Info col">
       <p><i class="bi bi-buildings-fill"></i>Address: 314 IMAM RD <br>LANSDOWNE<br>7745</p>
       <p>Contact:(021) 1233 562</p>
       <p>Email: styletto's@mail.com</p>

        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'contactView',
    
}
</script>

<style scoped>

h1{
  color: white;
  text-transform: uppercase;
}
.formy{
  background-color: #08172E;
  width: 60%; 
  padding: 2%;
  margin-top: 195px;

  box-shadow: #08172E 5px 5px 5px 5px;
}

.Info{
  margin-top: 260px;
}

.form-check-label{
  color:whitesmoke
}
.form-label{
  color:whitesmoke
}

p{
  font-weight: bolder;
  font-style: italic;
  font-size: x-large;
  
}
    
</style>