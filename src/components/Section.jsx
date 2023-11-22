export default function Section({title,children,...ashok}){
    return(
        <section {...ashok}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}