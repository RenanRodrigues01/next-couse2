import Link from 'next/link'
export default function LinkPrefetch () {
/*com o link Prefetch false o conteudo não é baixado, mas quando tem um hover esse conteudo é pre carregado 
  com o link Prefetch true o conteudo do link é baixado junto com a pagina que contem o link*/
    return (
        <div>
            <ul>
                <li>
                    <Link href='/' prefetch={false}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/sobre' prefetch={true}>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href='/link-prefetch' prefetch={false}>
                        Link prefetch
                    </Link>
                </li>
            </ul>
        </div>
    )
}