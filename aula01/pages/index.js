import Link from 'next/link'

function HomePage() {
    return (
        <div>
            <h1>Está fncionando</h1>
            <ul>
                <li>
                    <Link href='/sobre'> Ir para sobre nós</Link>
                </li>
                <li>
                    <Link href='posts/post-do-link'>Ir para post sobre Next Js</Link>
                </li>
            </ul>
            <div>
                <img src='/images/felix3.png' />
            </div>
        </div>
    )
}
export default HomePage;