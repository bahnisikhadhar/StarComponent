//-----------------------------------------STAR COMPONENT---------------------------------------------------

const stars = document.querySelectorAll(".fa-star");
const starContainer = document.querySelector(".star_container");
const container = document.querySelector(".container");


starContainer.addEventListener("mouseover",(e)=>{
    // console.log(stars);
    e.stopPropagation();
    stars.forEach((ele,index) => {
        if(ele == e.target){
            for(let i = 0;i <= index ; i++)
            {
                stars[i].classList.add("green");
            }

            for(let i = index+1 ; i < stars.length ; i++){
                stars[i].classList.remove("green");
            }
        }
    })
})


starContainer.addEventListener("click",(e)=>{
    e.stopPropagation();
    stars.forEach((ele,index)=>{
        ele.classList.remove("green");
        ele.classList.remove("gold");
        if(ele==e.target){
            for(let i=0;i<=index;i++)
            {
                stars[i].classList.add("gold");
            }
        }
    })
})


container.addEventListener("click",()=>{
    stars.forEach((ele)=>{
        ele.classList.remove("green");
        ele.classList.remove("gold");
    })
})
container.addEventListener("mouseover",()=>{
    stars.forEach((ele)=>{
        ele.classList.remove("green");
        // ele.classList.remove("gold");
    })
})