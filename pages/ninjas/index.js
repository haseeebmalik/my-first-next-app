import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
function Ninjas({ninjas}) {
    return <div>
      <h1>All Ninjas </h1>
      {
        ninjas.map((val)=>{
          return(
            <Link href={'/ninjas/'+val.id} key={val.id}>
              <a className={styles.single}>

              
              <h3>{val.name}</h3>
              </a>
            </Link>
          )
        })
      }
    </div>
  }
  
  export default Ninjas

  export const getStaticProps=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    return {
      props:{ninjas:data}
    }
  }