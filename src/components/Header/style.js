import styled from 'styled-components'
export const  HeaderWrapper=styled.div`
height:75px;
color:#fff;
background-color:#242424;
.content{
   font-size: 14px;
    display:flex;
    justify-content:space-between;
    height: 70px;
    }
    .divider{
        height: 5px;
        box-sizing: border-box;
        background-color: #C20C0C;  
    }
`
export const HeaderLeft=styled.div`
display:flex;
.logo{
    display:block;
    width:176px;
    height:69px;
    background-position:0 0;
}
.select-list{
    display:flex;
    line-height:70px;
    .select-item{
        position:  relative;
        a{
            display: block;
            padding: 0 20px;
            color: #ccc;
        }
        :last-of-type a{
            position:  relative;
            ::after{
                position: absolute;
                content: '';
                width: 28px;
                height: 19px;
                background-image:url(${require("@/assets/img/sprite_01.png")}) ;
                background-position: -190px 0;
                top: 24px;
                right: -15px;
            }
        }
        &:hover a,&.active a{
            color: #fff;
            background: #000 ;
            text-decoration: none;
        }
       .active .icon{
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%,0);
            background-position: -226px 0;
        }
    }
}
`
export const HeaderRight=styled.div`
display: flex;
align-items: center;
color: #ccc;
font-size: 12px;
 .search{
     width: 158px;
     height: 32px;
     border-radius: 16px;
     input{
         &::placeholder{
             font-size: 12px;
         }
     }

 }
 .center{
     width:100px;
     height: 32px;
     color: #ccc;
     line-height: 32px;
     text-align: center;
     border: 1px solid #666;
     border-radius: 16px;
     margin: 0 16px;
     background-color:transparent ;
     outline: none;
 }
 .login{
     background-color: transparent;
     cursor: pointer;
     outline: none;
 }
`

