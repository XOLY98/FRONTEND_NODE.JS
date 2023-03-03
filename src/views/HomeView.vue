<template>
  <div class="animated-title">
    <div class="text-top">
      <div >
        <span>About Us</span>
      </div>
    </div>
    <div class="text-bottom ">
      <div>We are an organisation specializing in feminine footwear, we value women's wants.</div>
    </div>
  </div>
  <div class>
  </div>
   <img src="https://i.postimg.cc/gJhLQK8p/front-page-removebg-preview.png" height="400rem" alt="front page">

<!-- Modal -->

  
 
</template>

<script>

export default {
    name: 'HomeView',
  components: {
    
  }
}

</script>

<style scoped>
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
  margin-top: 2px;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 80%;
}
.animated-title > div div {
  font-size: 5vmin;
  padding: 2vmin 0;
  position: absolute;
}
.animated-title > div div span {
  display: block;
  color:#000;
  font-size:10vmin;
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
  margin-top: 195px;
  margin-left: 10px;
}

.text-bottom{
  font-size: 5px;
}

</style>
