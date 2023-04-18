import Link from 'next/link'
function SobrePage() {
    return (
        <div>
            <h1>Pagina sobre nós</h1>
            <ul>
                <li>
                    <Link href='/'>Voltar para Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default SobrePage;