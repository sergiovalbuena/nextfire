import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Loader show/> 
    <h1>main</h1>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: {username: 'jeffd23'},
      }}>
        <a>Ser's Profile</a>
  
     </Link> */}
      <button onClick={ () => toast.error('hello toast!')}>
        Toast Me
      </button>
      <button onClick={() => toast('Hello Darkness!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })}>

        Toast Me2
      </button>
    </div>
  )
}
