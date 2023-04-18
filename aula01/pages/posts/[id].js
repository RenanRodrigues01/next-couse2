import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Post() {
    const router = useRouter()

    return (
        <div>
            <h2>Pagina de posts</h2>
            <div>
                <p>
                    Id do post atual: {router.query.id}
                </p>
                <p>
                    um texto qualquer sobre Next js 
                </p>
            </div>
            <ul>
                <li>
                    <Link href='/'>Voltar para Home</Link>
                </li>
            </ul>
        </div>
    )
}