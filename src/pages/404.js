import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (<>
    <GatsbySeo
      title={`Ошибка 404. Страница не найдена`}
      noindex={true}
      nofollow={true}
      description={`Ошибка 404. Страница не найдена`}
      canonical={`https://3djew.mustbefamily.com/404`}
      openGraph={{
        url: 'https://3djew.mustbefamily.com/404',
      }} />
    <div className={`w-full bg-black px-5 h-screen flex justify-center items-center`}>
      <div>
        <div className={`lg:container pb-12 lg:mx-auto lg:py-10 text-center`}>
          <h1 className={`text-white text-3xl py-4`}>Ошибка 404. Страница не найдена</h1>
          <Link to={`/`} className={`text-white uppercase font-bold text-xl border border-white rounded-full pt-0.5 px-3`}>Перейти на главную</Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default NotFoundPage
