import { useState } from "react"

export function TwitterFollowCard({children, formatUserName, username = 'unknown', name, initialIsFollowing, formattedUserName}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    // console.log(isFollowing)

    // const addAt = (username) => `@${username}`

    const text = isFollowing? 'Siguiendo' : 'Seguir' 
    const buttonClassName = isFollowing? 'tw-followCard-info-Follow is-following' : 'tw-followCard-info-Follow'
    console.log(buttonClassName)

    const imageSrc = `https://unavatar.io/${username}`
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={imageSrc} 
                    alt="Avatar del perfil" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    {children}
                    <br />
                    <span>{formatUserName(username)}</span> 
                    {/* <span>{addAt(username)}</span>  */}
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow"> Dejar de Seguir</span>
                </button>
            </aside>
        </article>

    )
}