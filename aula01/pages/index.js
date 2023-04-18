import Link from 'next/link'

function HomePage() {
    return (
        <div>
            <h1>Está fncionando</h1>
            <ul>
                <li>
                    <Link href='/sobre'> Ir para sobre nós</Link>
                </li>
            </ul>
        </div>
    )
}
export default HomePage;