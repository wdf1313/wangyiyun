import React, { Fragment } from 'react'
import { footerLinks,footerImages } from '@/common/local-data'
import { Footerwrapper, FooterLeft, FooterRight } from './style'
export default function App() {
  return (
    <Footerwrapper>
      <div className='wrap-v2 content'>
        <FooterLeft >
          <div className="wrap f-cb">
           {
              footerLinks.map((item) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} className='title'>{item.title}
                    </a>
                    <span>|</span>
                  </Fragment>
                )
              })
            }
            
            <p className="right s-fc3">
              <span className="sep span">网易公司版权所有©1997-2022</span><span className="span">杭州乐读科技有限公司运营：</span><a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" target="_blank" className="alink s-fc3">浙网文[2021] 1186-054号</a>
            </p>
            <p className="right s-fc3">
              <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" className="alink s-fc3">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank" className="alink s-fc3 police-link">
                <span className="police-logo"></span>
                <span className="police-text">浙公网安备 33010902002564号</span>
              </a>
            </p>
          </div>
        </FooterLeft>
       <div className='dright'>
       <FooterRight>
         <ul>
           {
          footerImages.map((item,index)=>{
            return (
              <li key={index} className='logo'>
                <a href={item.link} className='title'></a>
                <span className='link' ></span>
              </li>
            )
          })
           }
         </ul>
        </FooterRight>
       </div>
      </div>
    </Footerwrapper>
  )
}
