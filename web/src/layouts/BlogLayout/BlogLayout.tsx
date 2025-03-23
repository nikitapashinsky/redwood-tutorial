import { NavLink, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <NavLink className="" activeClassName="" to={routes.home()}>
            Redwood Blog
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink
                className="link"
                activeClassName="link-active"
                to={routes.home()}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                activeClassName="link-active"
                to={routes.about()}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
