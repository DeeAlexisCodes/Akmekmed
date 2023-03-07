import './card.css'

export const Card = ({children, classname, onClick}) => {
  return (
    <article className={'card ${classname}'} onClick={onClick}>
        {children}
    </article>
  )
}

export default Card
