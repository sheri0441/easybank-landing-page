import { Card } from "react-bootstrap";

import './WhyCard.scss';


const WhyCard = ({iconId, title, children}) => {
    return(
        <Card className="border-0 bg-transparent w-100 mx-auto text-center cardDesktop" style={{maxWidth: "240px", flex: "0 0 100%"}}>
            <svg style={{width: "70px", height: "70px"}} className="mx-auto">
                <use xlinkHref={`#${iconId}`} />
            </svg>
            <Card.Body className="p-0 mt-4">
                <Card.Title style={{color: "var(--clr-pr-db)"}}>{title}</Card.Title>
                <Card.Text className="mt-4 ">{children}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default WhyCard;