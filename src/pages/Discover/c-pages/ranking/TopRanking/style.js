import styled from 'styled-components'
export const RankingListWrapper = styled.div`
padding: 0 40px;
.playlist{
    .header{
        display: flex;
        width: 100%;
        border: 1px solid #d9d9d9;
        li{
            height: 34px;
          line-height: 34px;
          background-image: url(${require("@/assets/img/sprite_table.png")});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
        }
        .ranking{
            flex:.125 ;
        }
        .title{
            flex:.5;
        }
        .duration{
            flex:.125;
        }
        .singer{
            flex: .25;
        }
    }
    
    li:nth-child(-n+3){
      padding: 0;
      
        .rank-num {
          display: flex;
          flex: .125;
          position: relative;
     
          .num {
            margin-top: 18px;
            width: 20px;
            height: 18px;
            text-align: center;
            color: #999;
          
          }
          .new {
            margin-top: 18px;
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
          .song-name {
              flex: .75;
           padding:5px 10px;
           display: flex;
           align-items: center;
           img {
             width: 50px;
             height: 50px;
              
           }
           .play {
             width: 17px;
             height: 17px;
             background-position: 0 -103px;
           }
           .name {
             margin-left: 10px;
           }
         }
         .active{
             display: flex;
             position: absolute;
             top: 15px;
             left: 400px;
             align-items: center;
          width: 82px;
           
             .hover:hover{
                 display: flex;
                 position: relative;
                 left: 0;
                 top: -12px;
                 button{
                    position: absolute; 
            width: 17px;
            height: 20px;
            
            cursor: pointer;
             }
                .add{    
                 
                background-position: -267px -264px;
             }
             .update{
            top:2px;
                 left: 20px;
            background-position: 0 -697px;
             }
             .download{
                position: absolute;
                 left: 40px;
                background-position: -297px -264px;
             }
             }
         }
         .singer{
             position: absolute;
             top: 15px;
             left: 500px;
         }
        }
   
    }
    li:nth-child(n+4){
      padding: 0;
      height: 30px;
        .rank-num {
          display: flex;
          flex: .125;
          position: relative;
     
          .num {
            margin-top: 18px;
            width: 20px;
            height: 18px;
            text-align: center;
            color: #999;
          
          }
          .new {
            margin-top: 18px;
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
          .song-name {
            position: absolute;
            left: 50px;
            top: 11px;
              flex: .75;
           padding:5px 10px;
           display: flex;
          
           align-items: center;
           img {
             width: 50px;
             height: 50px;
              
           }
           .play {
             width: 17px;
             height: 17px;
             background-position: 0 -103px;
           }
           .name {
             margin-left: 10px;
           }
         }
         .active{
             display: flex;
             position: absolute;
             top: 17px;
              left: 400px;
             align-items: center;
          width: 100px;
           padding: 0;
             .hover:hover{
              padding: 0;
              flex: .2;
                 position: relative;
                 left: 0;
                 top: -12px;
                 button{
                    position: absolute; 
            width: 25px;
            height: 20px;
            
            cursor: pointer;
             }
                .add{    
                 
                background-position: -267px -264px;
             }
             .update{
            top:2px;
                 left: 20px;
            background-position: 0 -697px;
             }
             .download{
                position: absolute;
                 left: 40px;
                background-position: -297px -264px;
             }
             }
         }
         .singer{
          position: absolute;
             top: 15px;
             left: 500px;
       
         }
        }
   
    }
}
`