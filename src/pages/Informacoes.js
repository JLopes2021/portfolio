import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../layouts/Informacoes.module.css'

function Informacoes(){
    return (
        <div>
            
            <div className={styles.geral}>
                 <Card style={{ width: '18rem', height: '39rem' }}>
      <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJQAyDru9uGNFQXtHis9fyeDDwvq3FZqzeVANJuD0yvevQKDRVdNwcbmIQKqNcTRfDSsqMW-aJi18CoJZ54KzmwgSfCKZEC1Scr_TTDwLpjcpNzUBQhUwoWrYt_StSUoGiNQi8zANUEsWUYSBXtCpOaLm70bWXAuJ_CxM9FmqLHq0G6SJHrxJSVTKqCQ/s320/Design%20sem%20nome%20(2).png" />
      <Card.Body>
        <Card.Title>Jefferson Lopes</Card.Title>
        <Card.Text>
          Olá, sou desenvolvedor Full Stack, aqui você vai encontrar um pouco do meu trabalho.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
            <Card.Link href="https://lariphotographer.wordpress.com/">Lari Photographer</Card.Link> - Completo
            </ListGroup.Item>
        <ListGroup.Item>        
            <Card.Link href="https://buscador-cep-react-eight.vercel.app/">Buscador de CEP </Card.Link> - Em desenvolvimento
        </ListGroup.Item>
        <ListGroup.Item>
            <Card.Link href="https://flappy-bird-tau.vercel.app/">Flappy Bird </Card.Link>- Em desenvolvimento
        </ListGroup.Item>
        <ListGroup.Item>
            <Card.Link href="https://ionic-nadadores.vercel.app/home">IONIC Nadadores </Card.Link>- Completo
        </ListGroup.Item>
      </ListGroup>
    </Card>
    
            </div>
           
        </div>
    )
}

export default Informacoes;