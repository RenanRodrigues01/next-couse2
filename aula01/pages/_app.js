
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <style global jsx>{`
                body {
                    font-family: 'Playfair Display';
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}