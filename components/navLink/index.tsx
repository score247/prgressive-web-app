import { useRouter } from 'next/router';

type Props = {
  href: string;
};

const NavLink: React.FunctionComponent<Props> = ({ children, href }) => {
  const router = useRouter();

  return (
    <a href={href} className={router.pathname == href ? 'active' : ''}>
      {children}
      <style jsx>{`
        a {
          display: block;
          text-transform: uppercase;
          font-weight: bold;
        }

        a:hover,
        a.active {
          color: #ff8a00;
        }

        a.active:after {
          bottom: 0;
          left: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-color: rgba(255, 138, 0, 0);
          border-bottom-color: #ff8a00;
          margin-left: -7px;
          border-width: 5px 7px;
        }
      `}</style>
    </a>
  );
};

export default NavLink;
