let but=document.querySelector(".but");


but.addEventListener("click",()=>{
    but.style.width="16vw";
    but.style.height="6.1vw"
    but.style.backgroundColor="black";
    but.style.margin="0";
    but.style.paddingLeft="1.3%";
    but.style.paddingBottom="2%";
    but.style.textAlign="left";
    
    let side = document.querySelector(".side");
    side.style.width="16vw";
    side.style.backgroundColor="black"; 
    let ele = document.querySelectorAll(".an");
    ele.forEach(el => {
        el.style.flexDirection = "row";
        el.style.marginRight="3px";
    });
    let p =document.querySelectorAll("p");
    p.forEach(ps=>{
            ps.style.padding="2%";
            ps.style.marginLeft="5%";
            ps.style.fontSize="medium";
           });
    let pl = document.querySelector(".pl");
    pl.style.display="block";
    let m2=document.querySelector(".m2");
    m2.style.marginLeft="15%";
    
});