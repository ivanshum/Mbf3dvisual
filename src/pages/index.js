import * as React from "react"
import { Link } from "gatsby"
import useWindowSize from '../utils/useWindowSize'
import ReactVideo from "../components/reactvideo"
import { graphql } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

export const query = graphql`
query IndexPageQuery {
  allCategoriesJson {
    nodes {
      slug
      title
    }
  }
}`

const IndexPage = ({ data }) => {
  const Item = ({ to, label, styleObj }) => {
    /*Class as var tailwind restrictions*/
    return (<>
      <Link className={`px-5 md:px-0 cursor-pointer`} to={to}>
        <div className={`before:relative before:pt-[100%] before:inline-block before:content-[''] before:w-1 before:h-0 bg-cover relative`} style={styleObj}>
          <div className={`absolute top-0 left-0 grid justify-center items-end text-center w-full h-full`}>
            <div className={`mb-[10%] lg:mb-[20%] flex flex-col justify-around items-center`}>
              <span className={`text-white uppercase pb-3 lg:pb-5`}>{label}</span>
              <span className={`text-white font-bold border border-white rounded-full text-sm pt-0.5 px-3 uppercase`}>Смотреть</span>
            </div>
          </div>
        </div>
      </Link>
    </>)
  }
  const { ar } = useWindowSize();
  return (<>
    <GatsbySeo
      title={`Jewelry 3D by MUSTBEFAMILY`}
      titleTemplate={`%s`}
      description={`Мы создаем визуальный контент используя моушн-дизайн – это не просто альтернатива классической съемке украшений, а самостоятельный продукт, который способен вывести ювелирный бренд на новый качественный уровень коммерческой рекламы.`}
      canonical={`https://3djew.mustbefamily.com`}
      openGraph={{
        url: 'https://3djew.mustbefamily.com',
        images: [{
          url: `https://3djew.mustbefamily.com/images/social_main.jpg`,
          width: 720,
          height: 720,
          alt: `Мы создаем визуальный контент используя моушн-дизайн – это не просто альтернатива классической съемке украшений, а самостоятельный продукт, который способен вывести ювелирный бренд на новый качественный уровень коммерческой рекламы.`,
        }],
      }} />
    <div className={`absolute top-0 -z-10 left-0 react-player-wrapper w-full h-screen`}>
      <ReactVideo
        width="100%"
        height="100%"
        playing={true}
        playsinline
        loop={true}
        muted={true}
        video={(ar > 1) ? `/videos/horiz.mp4` : `/videos/vert.mp4`}
        poster={(ar > 1) ? `/videos/horiz.png` : `/videos/vert.png`}
        className={`coverinner`}
        alt={`Must Be Family шоурил`} />
    </div>
    <div className={``}>
      <div className={`lg:container lg:mx-auto`}>
        <div className={`w-full px-5 h-screen flex justify-center items-center`}>
          <div>
            <h1 className={`py-[10px] font-black text-2xl text-center text-white lg:text-5xl uppercase`}>Визуализации ювелирных украшений</h1>
            <h2 className={`pt-[10px] pb-[30px] font-bold text-sm text-center text-white lg:text-xl uppercase`}>Безграничные возможности демонстрации ваших ювелирных изделий</h2>
          </div>
        </div>
      </div>
      <div className={`bg-white`}>
        <div className={`lg:container py-12 lg:mx-auto lg:py-20`}>
          <p className={`lg:text-xl px-5 lg:max-w-[1040px] lg:mx-auto text-sm uppercase`}>Мы создаем визуальный контент используя моушн-дизайн – это не просто альтернатива классической съемке украшений, а самостоятельный продукт, который способен вывести ювелирный бренд на новый качественный уровень коммерческой рекламы.</p>
        </div>
      </div>
      <div className={`bg-white md:bg-black`}>
        <div className={`grid grid-cols-1 pb-5 md:pb-0 gap-5 md:gap-0 md:container md:mx-auto md:grid-cols-2`}>
          {data.allCategoriesJson.nodes.map((e) => {
            return (
              <Item to={`/${e.slug}`} label={e.title} styleObj={{ backgroundImage: `url('/images/${e.slug}.jpg')` }}></Item>
            )
          })}
        </div>
      </div>
      <div className={`bg-black`}>
        <div className={`lg:container lg:mx-auto px-5 text-slate-100`}>
          <h2 className={`uppercase text-lg lg:text-xl font-bold py-10 lg:text-center`}>Преимущества визуализации</h2>
          <div className={`grid grid-cols-1 lg:gap-5 lg:grid-cols-3`}>
            <div>
              <h3 className={`uppercase font-bold leading-normal`}>Превосходное качество контента.<br />Даже в мельчайших деталях.</h3>
              <div className={`py-4`}>
                <p className={`leading-normal`}>
                  Высокое разрешение, поскольку мы не ограничены матрицей камеры, а моделируем видео на компьютере.<br /><br />
                  Отсутствие пыли и других посторонних частиц на изделиях.<br /><br />
                  Выход за рамки возможностей оптики, физики и студийного освещения. Вы можете использовать любые эффекты свечения, чтобы подчеркнуть фактуру, объём, цвет и глубину материалов.<br /><br />
                </p>
              </div>
            </div>
            <div>
              <h3 className={`uppercase font-bold leading-normal`}>Быстрые сроки производства.</h3>
              <div className={`py-4`}>
                <p className={`leading-normal`}>
                  Гибкость при внесении правок. Процесс и демонстрация промежуточных результатов происходит в онлайн-режиме.<br /><br />
                  Можно обойтись без личной встречи. Отсутствие трат времени на транспортировку изделий. Вы не рискуете повредить изделия.<br /><br />
                  Нет необходимости привлекать большую команду специалистов. Таких как фотограф/видеооператор, осветитель, сотрудник студии, персонал, ответственный за сохранность украшений.<br /><br />
                </p>
              </div>
            </div>
            <div>
              <h3 className={`uppercase font-bold leading-normal`}>Маркетинговая эффективность.</h3>
              <div className={`py-4`}>
                <p className={`leading-normal`}>
                  Визуальный контент легче адаптировать под показ в социальных сетях в разных форматах: квадратном, горизонтальном, вертикальном.<br /><br />
                  Анимация привлекает больше внимания за счет динамики, которую невозможно получить при классической фото и видеосъемке.<br /><br />
                  Моушн-дизайн лучше запоминается и производит больше впечатления на зрителя благодаря неповторимым визуальным эффектам.<br /><br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default IndexPage
