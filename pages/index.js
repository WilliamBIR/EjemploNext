import Layout from "../components/layout";

import Title from "../components/title";

export default function Home(){
    return(
    <Layout>
        <Title> Home page</Title>
        <p>Aprendamos NextJs</p>
        <style>
            {`
            p{
                color:darkgray;
            }
            p:hover{
                color:darkred;
            }
            `}
        </style>
    </Layout>
    )
}