import styled from 'styled-components';

export const PlayerSongsWrapper = styled.div`
  .songs {
    .song-item {
      display: flex;
      align-items: center;
      margin-top: 15px;
      width: 200px;
      /* .image {
        width: 50px;
        height: 50px;
      } */
      .info {
          position: relative;
        /* margin-left: 10px; */
        width: 100%;
        .name {
          font-size: 14px;
          color: #000;
        }
        .auchor {
          color: #999;
          .nickname {
            color: #666;
          
          }
        }
        button{
            padding: 0;
            top: 10px; 
            position: absolute;
            width: 17px;
            height: 17px;
        }
        .play{
            background-position: -10px -505px;
         left: 150px;
        }
        .add{
            background-position: -45px -635px;
            left: 175px;
        }
      }
    }
  }
`