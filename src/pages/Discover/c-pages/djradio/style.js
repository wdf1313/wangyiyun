import styled from 'styled-components'
export const RadioWrapper=styled.div`

`
export const RadioCateList=styled.div`
position: relative;
    .arrow {
      position: absolute;
      width: 20px;
      height: 30px;
      cursor: pointer;
      top: 50%;
    }
    .arrow-left {
      left: 0; 
    background-position: 0 -30px;
    }
    .arrow-right {
      right: 0;
    background-position: -30px -30px;
    }
  .carousel{
    height:220px;
 margin-left: 60px;
 margin-top: 10px;
 margin-bottom: 20px;
    ul{
      display: flex !important;
      flex-flow:  row wrap;
      justify-content: center;
      align-content: flex-start;
      height: 220px;
    }
    li{
      position: relative;
      margin-bottom: 50px;
      width: 70px;
        height: 70px;
       text-align: center;
      box-sizing: border-box;
      flex: 0 0 12%;
     em{
       text-align: center;
   position: absolute;
   left: 20px;
     }
    
    }
  }
  
`
