import Link from 'next/link';

//Top navbar
export default function Navbar() {
  const user = false;
  const username = false;
  //const { user, username } = {};
  
  return (
    <nav className="navbar">
      <ul>

        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href='/admin'>
                <button className="btn-blue">Write Post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} alt="" />
              </Link>
            </li>

          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}


      </ul>
    </nav>
  )
}