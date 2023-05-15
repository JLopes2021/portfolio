import Card from 'react-bootstrap/Card';
import Botoes from "./Botoes";
import styles from '../layouts/Cards.module.css'



function Cards(){
    return(
        <div>
            <section className={styles.secaoDivs}>
                <div className={styles.div1}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Site Lari Photographer</Card.Title>
                                    <Card.Text>
                                    Site desenvolvido para melhorar a fluídez e deixar de forma mais profissional o site.
                                    </Card.Text>
                                <Botoes/>
                            </Card.Body>
                    </Card>
                </div>
                <div className={styles.div2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Buscador de CEP</Card.Title>
                                    <Card.Text>
                                    Projeto em React em Execução que busca CEP e realiza outros tipos de consultas.
                                    </Card.Text>
                                <Botoes/>
                            </Card.Body>
                    </Card>
                </div>
                <div className={styles.div2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Flappy Bird</Card.Title>
                                    <Card.Text>
                                   Jogo desenvolvido em JavaScript manipulando canvas e orientando objetos.
                                    </Card.Text>
                                <Botoes/>
                            </Card.Body>
                    </Card>
                </div>
                <div className={styles.div2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>IONIC Nadadores</Card.Title>
                                    <Card.Text>
                                    Projeto simples mobile onde mostra a categoria dos nadadores segundo a sua idade.
                                    </Card.Text>
                                <Botoes/>
                            </Card.Body>
                    </Card>
                </div>
            </section>
            
        </div>
    )
}

export default Cards;