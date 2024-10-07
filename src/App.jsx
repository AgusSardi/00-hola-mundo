// EN ESTE ARCHIVO SE ENCUENTRAN LOS COMPONENTES

import './App.css'
import './TwitterFollowCard.jsx'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){

    const formatUserName = (username) => `@${username}`

    const users = [
        {
            username: 'midudev',
            name: 'Miguel Angel',
            isFollowing: false,
            formatUserName: formatUserName
        },
        {
            username: 'juanvaldez',
            name: 'Juan Valdez',
            isFollowing: true,
            formatUserName: formatUserName
        }
    ]
    

    const pepe = {isFollowing: true, username: 'pepeArgento', name: 'Pepe Argento', formatUserName: formatUserName }
    
    const formattedUserName = (<span>@sardiAgus</span>) // Tambien pueden pasarse elementos enteros
    return(
         // Es lo mismo que React.Fragment
         // <>
        <section className='App'>
             <TwitterFollowCard 
                formatUserName={formatUserName} 
                username='agusSardi' 
                name='Agustin Sardi' 
                initialIsFollowing={true}
            />
                


            <TwitterFollowCard 
                formatUserName={formatUserName} 
                username='elonmusk' 
                formattedUserName={formattedUserName}
                initialIsFollowing={false}
            > 

                <strong>Elon Musk</strong>

            </TwitterFollowCard>


            <TwitterFollowCard 
                formatUserName={formatUserName} 
                name='Juan' 
                initialIsFollowing={false}
            />

            <TwitterFollowCard 
                {... pepe}
            /> 

            {
                users.map((user) =>{
                    const { username, name, isFollowing, formatUserName } = user
                    console.log(user)
                    return(
                        <TwitterFollowCard
                            key={username}
                            username= {username}
                            initialIsFollowing = {isFollowing} 
                            formatUserName={formatUserName} 
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
                
        </section>
        // </>
        
    )
}