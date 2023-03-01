<template>
  <div class="animated-title">
    <div class="text-top">
      <div>
        <span>Styletto's</span>
      </div>
    </div>
    <div class="text-bottom">
      <div>for the win!</div>
    </div>
  </div>
  <div>
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 LOGIN
</button>
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  REGISTER
</button>
  </div>
  <img src="https://i.postimg.cc/gJhLQK8p/front-page-removebg-preview.png" alt="front page">

<!-- Modal -->
<div>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">YOUR DETAILS...</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"  aria-describedby="emailHelp" required>Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"  aria-describedby="passwordHelp" required>Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1"  aria-describedby="checkmeoutHelp" required>Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">YOUR DETAILS...</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="" method="post">
          <label for="fname">First Name:</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." aria-describedby="nameHelp" required><br>
      <pre></pre>
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." aria-describedby="lastnameHelp" required><br>
      <pre></pre>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Your email address.." aria-describedby="emailHelp" required><br>
      <pre></pre>  
          <label for="message">Message:</label>
          <input type="text" id="message" name="message" placeholder="Your message.." aria-describedby="messageHelp" required><br>
      <pre></pre>
          <label for="country">Country:</label>
          <select id="country" name="country">
          <option value="south africa"> South Africa</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select><br>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
  </div>
 
</template>

<script>
// import SpinnerComp from '../components/SpinnerComp.vue'
export default {
    name: 'HomeView',
  components: {
    // SpinnerComp
  }
}

</script>

<style>
.btn{
  
  margin:0 auto;
  align-items:center;
  justify-content: end;
 


    animation: 2s anim-lineUp ease-out infinite;
    font-size:2rem;
   
  }
  @keyframes anim-lineUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @media screen and (min-width: 300px) and (max-width:719px){
   

}

@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animated-title {
  color: #222;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vmin;
  margin-left: 300px;
  margin-top: 10px;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 80%;
}
.animated-title > div div {
  font-size: 7vmin;
  padding: 2vmin 0;
  position: absolute;
}
.animated-title > div div span {
  display: block;
  color:#000
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid #000;
  top: 0;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: black;
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}
img{
  margin-top: 30px;
  margin-left: 10px;
}
.modal-body ,.modal-dialog, .modal-footer{
  background-color:#08172E ;
}


</style>
