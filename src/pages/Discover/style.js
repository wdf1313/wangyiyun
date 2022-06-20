import styled from 'styled-components'
 export const DiscoverWrapper=styled.div`
 .menu{
     height: 35px;
     background-color: #C20C0C;
     border-bottom: 1px solid #a40011;
   
 }
 `
 export const TopMenu =styled.div`
  display:  flex;
  padding-left: 180px;
  position: relative;
  top:  -4px;
  
      a{
          display: inline-block;
          height: 20px;
          line-height: 20px;
          padding: 0 13px;
          margin: 7px 17px 0; 
          color: #fff;
      &:hover ,&.active{
          text-decoration: none;

          background-color: #9B0909;
          border-radius: 30px;
      }
  }
 `