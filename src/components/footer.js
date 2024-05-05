import { Link } from 'gatsby'
import * as React from 'react'
const Footer = ({ loc }) => {
  return (<>
    <footer className={`bg-white py-5`}>
      {loc.pathname !== `/kontakty` ? <div className={`lg:container pb-12 lg:mx-auto lg:py-10 text-center`}>
        <Link to={`/kontakty`} className={`text-black uppercase font-bold text-base border border-black rounded-full pt-0.5 px-3`}>Получите бесплатный образец</Link>
      </div> : <></>}
      <div className={`lg:container lg:mx-auto px-5 grid lg:grid-cols-3 grid-cols-none items-start lg:items-center grid-flow-row-dense`}>
        <div className={`pb-2`}>
          <div className='flex flex-row items-center'>
{/*             <a href={'https://instagram.com/mustbefamily'} target={`_blank`} className={`h-[19px]`}>
              <img alt={`instagram`} src={`/images/instagram.jpg`} type={`image/jpg`} width={`19`} height={`19`} />
            </a>
 */}            <a href={'https://youtube.com/c/mustbefamily'} target={`_blank`} className={`h-[15px] ml-3 scale-110`}>
              <img alt={`youtube`} src={`/images/youtube.jpg`} type={`image/jpg`} width={`22`} height={`15`} />
            </a>
            <a href={'https://vk.com/mustbefamily'} target={`_blank`} className={`h-[15px] ml-3 mt-[3px] scale-[1.15]`}>
              <img alt={`vk`} src={`/images/vk.jpg`} type={`image/jpg`} width={`22`} height={`15`} />
            </a>
          </div>
        </div>
        <div className={`text-center col-[1_/_3] lg:col-auto pt-4 md:pt-0`}>
          2022 <span className={`relative -top-0.5`}>&copy;</span> Must Be Family. Все права защищены
        </div>
        <div className={`text-right`}>
          <div>
            <a href={`/cookie-policy`} target={`_blank`} className={`uppercase text-sm`}>Мы используем куки</a>
            <br />
            <a href={`/privacy-policy`} target={`_blank`} className={`uppercase text-sm inline-block leading-3`}>Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}
export default Footer
