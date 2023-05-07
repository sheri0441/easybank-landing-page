import Container from 'react-bootstrap/Container';
import { CardGroup } from 'react-bootstrap';



import SVG from './SVGs';
import ButtonPrimary from './Button';
import ArticleCard from './ArticleCard';
import WhyCard from './WhyCard';
import HeroImage from '../assets/images/image-mockups.png';
import cuurency from '../assets/images/image-currency.jpg';
import confetti from '../assets/images/image-confetti.jpg';
import plane from '../assets/images/image-plane.jpg';
import restaurant from '../assets/images/image-restaurant.jpg';

import './MainBody.scss';

const Main = () => {
    return(
        <main className="" style={{backgroundColor: "var(--clr-n-vlg)", overflowX: "hidden"}}>
            {/* Hero section start  */}
            <div className='container-xxl gx-0'>
                <div id='heroSec' className='d-lg-flex flex-row-reverse'>
                    <div className='text-center position-lg-absolute' id='heroSecImage'>
                        <img src={HeroImage} alt="" className='w-75'/>
                    </div>
                    
                    <Container>
                        <div id='heroText' className='w-75 text-center mx-auto my-4 py-3 ms-lg-0 py-lg-0'>  
                            <h1>Next generation digital banking</h1>
                            <p>Take your financial life online. Your Easybank account will be a one stop shop for spending, saving, budgeting, investing, and much more.</p>
                            <ButtonPrimary />     
                        </div>
                    </Container>
                </div>
            </div>
            {/* Hero section end  */}

            {/* why section start  */}
            <div id='whySec' className='py-5' style={{backgroundColor: "var(--clr-n-lgb)", width: "100%"}}>
                <Container>
                    <div id='whySec_heading' className='text-center w-75 mx-auto ms-lg-0'>
                        <h2>Why choose Easybank?</h2>
                        <p className='mt-lg-4'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                    </div>
                    <CardGroup className='mt-5 pt-lg-4 justify-content-lg-between' style={{gap:"24px"}}>
                        <WhyCard title={"Online Banking"} iconId={"icon-online"} >
                            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                        </WhyCard>
                        <WhyCard title={"Simple Budgeting"} iconId={"icon-budgeting"} >
                            See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
                        </WhyCard>
                        <WhyCard title={"Fast Onboarding"} iconId={"icon-onboboading"} >
                            We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                        </WhyCard>
                        <WhyCard title={"Open API"} iconId={"icon-api"} >
                            Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                        </WhyCard>
                    </CardGroup>
                </Container>
            </div>
            {/* why section end  */}

            {/* article section start  */}
            <Container>
                <article style={{padding: "90px 0"}}>
                    <h2>Latest Articles</h2>
                    <CardGroup className='mt-5 pt-lg-4 justify-content-center justify-content-xl-between' style={{gap:"24px"}}>
                        <ArticleCard title={"Receive money in any currency with no fees"} img={cuurency} aurthor={"Claire Robinson"}>
                            The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single
                        </ArticleCard>
                        <ArticleCard title={"Treat yourself without worrying about money"} img={restaurant} aurthor={"Wilson Hutton"}>
                            Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you
                        </ArticleCard>
                        <ArticleCard title={"Take your Easybank card wherever you go"} img={plane} aurthor={"Wilson Hutton"}>
                            We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you
                        </ArticleCard>
                        <ArticleCard title={"Our invite-only Beta accounts are now live!"} img={confetti} aurthor={"Claire Robinson"}>
                            After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site
                        </ArticleCard>
                        
                    </CardGroup>
                </article>

            </Container>

            {/* article section end  */}
            <SVG />
        </main>
    )
}

export default Main;