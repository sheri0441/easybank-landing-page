import Button from 'react-bootstrap/Button';
import './Button.scss'


const ButtonPrimary = ({addClass}) => {
    return (
        <Button className={`rounded-pill fw-bold btn-gadient cus_button ${addClass}`} style={{padding: '13px 32px'}}>Request Invite</Button>
    )

}

export default ButtonPrimary;