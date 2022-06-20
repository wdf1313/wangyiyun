import styled from 'styled-components'
export const Footerwrapper=styled.div`
height: 172px;
background-color: #f2f2f2;
color: #666;
border-top: 1px solid #d3d3d3;
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
.dright{
    
    margin: auto;
}
`
export const FooterLeft=styled.div`
padding-right:5px ;
padding-top: 15px;
line-height: 24px;
.wrap{
  
a{
    display: inline-block;
    font-size: 10px;
    color: #999;
    margin:  0 10px;
}
p{
   
    margin-bottom: 0;
    .span{
        font-size: 10px;
    }
}
}
`
export const FooterRight=styled.div`
padding-left: 5px;
ul{
    display: flex;
    .logo{
        display: inline-block;
    margin-right: 30px;
        list-style: none;
       
         .title{
            display: block;
            width: 50px;
            height: 45px;
            margin: 0 auto;
            background: url(${require("@/assets/img/sprite_footer_02.png")}) no-repeat;
            background-size: 110px 450px;
         }
        
    }
    
    :nth-child(1) .title{
        background-position: -60px -101px;
    }
    :nth-child(2) .title{
        background-position:0 0 ;
    }
    :nth-child(2) .title{
     background-position: -60px -50px;
    }
    :nth-child(2) .title{
        background-position: -0px -101px;
    }
    .link{
        margin-top: 5px;
        display: block;
        width: 52px;
        height: 10px;
        background-image: url(${require("@/assets/img/sprite_footer_01.png")});
        background-size: 180px 100px;
    }
    :nth-child(1) .link{
        background-position: -1px -90px;
    }
    :nth-child(2) .link{
        background-position:0 0 ;
    }
    :nth-child(3) .link{
     background-position: -0 -54px;
    }
    :nth-child(4) .link{
        background-position: -1px -72px;
    }
}
` 