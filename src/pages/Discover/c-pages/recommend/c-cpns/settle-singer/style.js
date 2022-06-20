import styled from 'styled-components'
export const SettleSingerWrapper=styled.div`
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
 .more{
      color: #333;
    float: right;
      display: block;
      height: 31px;
    float: right;
    font-weight: normal;
    color: #666;
    margin-left:5px ;
    cursor: pointer;
    }
    .singer-list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      text-decoration: none;
      :hover {
        background-color: #f4f4f4;
      }
      img {
        width: 62px;
        height: 62px;
      }
      .info {
        margin: 8px 0 0 10px;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }
        .name {
          margin-top: 5px;
        }
      }
    }
  }
  .apply-for {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
    text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
    }
  }
`