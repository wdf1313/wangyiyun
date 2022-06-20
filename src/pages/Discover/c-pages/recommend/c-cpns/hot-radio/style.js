import styled from 'styled-components'
export const HotRadio =styled.div`
  padding: 20px;
h3{
    position: relative;
    height: 23px;
    margin: 0 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-weight: 700;
    font-size: 12px;
   
 }
 .radio-list {
    margin-top: 20px;
    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }
      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;
        }
        .position {
          color: #666;
        }
      }
    }
    }
`