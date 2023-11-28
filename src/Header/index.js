
import {Outlet,Link} from 'react-router-dom'
import './index.css'
function Header(){
    return(
        <>
        <nav>
            <ul className='mainList'>
                
                <li className='singleList'>
                    <Link to='/'>Task List</Link>
                    
                </li>
                <li className='singleList'>
                    <Link to='/add' >Add Task</Link>
                    
                </li>
                <li className='singleList'>
                    <Link to='/edit'>Edit Task</Link>
                    
                </li>
            </ul>
           
        </nav>
        <Outlet/>
        </>
    )
}

export default Header