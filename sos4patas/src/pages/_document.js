import Document , { Html , Head, NextScript, Main} from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    {/* COLOCAR FONTS */}
                    <link rel='stylesheet' href='nprogress.css'/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400&display=swap" rel="stylesheet"/>
                    
                </Head>
                <body>
                    <Main />
                    <NextScript>
                   
                    </NextScript>
                </body>
            </Html>
        )
    }
}