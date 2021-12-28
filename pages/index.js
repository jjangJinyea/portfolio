import Head from "next/head"

// A Smart Component from Framer

export default function Home() {
    return (
        <>
            <Head>
                <title>Yeajin Portfolio</title>
                <meta name="description" content="Modules" />
                <meta name="viewport" content="decice-width, intial-scale=1.0" />
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
            </Head>

            <div className="header">
                <p></p>
                <p className="logo">YJ</p>
                <p className="category"> </p>
            </div> 

            <div id="button">Works</div>
            <div id="button">About</div>
            
        </>
    )
}
