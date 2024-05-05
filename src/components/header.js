import { Link } from 'gatsby'
import * as React from 'react'
import { globalHistory } from '@reach/router'
import { StaticQuery, graphql } from 'gatsby'

const Header = ({ data, loc }) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    return globalHistory.listen(({ location, action }) => {
      if (action === 'PUSH' && loc.pathname !== location.pathname) { setOpen(false); }
    })
  }, [loc]);
  const links = [ { slug: ``, title: `Главная` }, ...data,
    { slug: `kontakty`, title: `Контакты` }
  ];
  return (<>
    <header className={`backdrop-blur-sm bg-black/50 py-[10px] lg:py-5 fixed top-0 w-full z-50`}>
      <div className={`lg:container lg:mx-auto px-5 flex flex-row items-center`}>
        <div className={`w-1/2 lg:w-2/5 flex justify-start`}>
          <button id={`menu`} className={`cursor-pointer h-[22px] w-[30px] rotate-0 ease-in-out duration-500 relative${isOpen ? ` open` : ``}`} onClick={() => setOpen(!isOpen)}>
            <span className={`${isOpen ? `top-[10px] w-0 left-1/2` : `top-0 w-full left-0`} bg-white opacity-100 h-[2px] rotate-0 ease-in-out duration-[250ms] absolute`}></span>
            <span className={`${isOpen ? `rotate-45` : `rotate-0`} bg-white left-0 top-[10px] opacity-100 w-full h-[2px] ease-in-out duration-[250ms] absolute`}></span>
            <span className={`${isOpen ? `-rotate-45` : `rotate-0`} bg-white left-0 top-[10px] opacity-100 w-full h-[2px] ease-in-out duration-[250ms] absolute`}></span>
            <span className={`${isOpen ? `top-[10px] w-0 left-1/2` : `top-[20px] w-full left-0`} bg-white opacity-100 h-[2px] rotate-0 ease-in-out duration-[250ms] absolute`}></span>
          </button>
        </div>
        <div className={`w-1/2 lg:w-1/5 flex justify-end lg:justify-center`}>
          <Link to={`/`}><picture>
            <source media={`(max-width: 1023px)`} srcSet={`/images/logo-m_1x.png 1x, /images/logo-m_2x.png 2x`} type={`image/png`} />
            <source media={`(min-width: 1024px)`} srcSet={`/images/logo_1x.png 1x, /images/logo_2x.png 2x`} type={`image/png`} />
            <img alt={`Mustbefamily logo`} src={`/images/logo_1x.png`} type={`image/png`} />
          </picture></Link>
        </div>
        <div className={`lg:w-2/5 hidden lg:flex lg:justify-end`}><Link to={`/kontakty`} className={`text-white uppercase font-bold text-xs border border-white rounded-full pt-0.5 px-3`}>Получите бесплатный образец</Link>
        </div>
      </div>
      <nav className={`transition-all duration-500 lg:mx-auto px-5 flex ${isOpen ? `pt-5 h-screen lg:container lg:pt-0 lg:h-[38px]` : `h-0`} flex-col items-center justify-start lg:flex-row lg:items-end lg:justify-center`}>
        {links.map((e) => (
          <Link to={`/${e.slug}`} activeClassName={`underline`} className={`text-white transition-all duration-500 uppercase lg:px-5 font-bold text-xs ${isOpen ? `py-2 lg:py-0 opacity-100` : `opacity-0`}`}>{e.title}</Link>
        ))}
      </nav>
    </header>
  </>
  )
}

export default function MyHeader(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allCategoriesJson {
            nodes {
              slug
              title
            }
          }
        }`}
      render={query => <Header data={query.allCategoriesJson.nodes} {...props} />}
    />
  )
}
