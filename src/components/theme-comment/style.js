import styled from 'styled-components'
export const ThemeWrapper=styled.div`


  .image{
   margin-top: 20px;
   margin-left: 40px;
    img{
    float: left;
    height: 50px;
    width: 50px; 
    }
  }
  .addcomment{
     margin-left: 100px;
     top:  20px;
     left:100px ;
     border: 1px solid #cdcdcd;
     height: 60px;
    width: 580px;
   
    textarea{
        width: 100%;
        height: 58px;
    }
  .comment::after{
      position: absolute;
      content: '';
      
      left:95px ;
      width: 10px;
      height: 10px;
      border-right: 1px solid #cdcdcd;
      border-bottom: 1px solid #cdcdcd;
      transform: rotate(135deg);
  }
   .design{
       width: 100%;
       span{
    display: block;
    float: left;
    width: 18px;
    height: 18px;
   margin-right: 5px;
    }
    .icon1{
        background-position:-40px -490px;
    }
    .icon2{
        background-position:-60px -490px;
    }
    a{
    margin-top: 5px;
    display: inline-block;
    float: right;
    width: 46px;
    height: 25px;
    background-position: -84px -64px;
    color: #fff;
    text-align:center;
    line-height: 25px;
    background-position: -84px -64px;
    cursor: pointer;
    }
    .button:hover{
     opacity: .8;
    }
   }
}
  

  

`