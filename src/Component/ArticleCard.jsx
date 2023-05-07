import { Card } from "react-bootstrap";
import './ArticleCard.scss';

const ArticleCard = ({img, aurthor, title, children}) => {
    return(
        <Card className="border-0 mx-auto cus_card" style={{flex: "0 0 100%", maxWidth: "300px"}}>
            <Card.Img variant="top" src={img} />
            <Card.Body className="p-4">
                <Card.Subtitle className="opacity-75" style={{fontSize: "10px"}}>By {aurthor}</Card.Subtitle>
                <Card.Title className="mt-1">{title}</Card.Title>
                <Card.Text>{children} …</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard;