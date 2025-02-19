import Container from "../Layout/Container";

export default function MissionVision (){
    return (
        <section className="section bg-[#f3f9fe]">
            <Container>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 md:grid md:grid-cols-2 md:gap-8 sm:grid sm:grid-cols-1">
                    <div className="vision-box p-10 bg-white">
                        <h3 className="text-[30px] pb-[20px]">Vision</h3>
                        <p>Our vision is to be a trusted global leader in back-office outsourcing, delivering exceptional client experiences with a skilled, reliable team.</p>
                    </div>
                    <div className="vision-box p-10 bg-white">
                        <h3 className="text-[30px] pb-[20px]">Mission</h3>
                        <p>Delivering top-tier outsourcing solutions, we aim to lead with integrity, innovation, and value, offering global clients sustainable competitive advantages.</p>
                    </div>
                </div>
                <div className="vision-box p-10 bg-white mt-8">
                <div className="lg:grid lg:grid-cols-5 lg:gap-5 md:grid md:grid-cols-3 md:gap-8 sm:grid sm:grid-cols-1">
                        <h3 className="text-[30px] pb-[20px]">Values</h3>
                        <div className="p-5 bg-[#f3f9fe] border border-[#e7e7e7] rounded-md">
                        <h3 className="text-[24px] pb-[20px]">Trust</h3>
                        <p>Building confidence through accountability and reliability in every client partnership.</p>
                    </div>
                    <div className="p-5 bg-[#f3f9fe] border border-[#e7e7e7] rounded-md">
                        <h3 className="text-[24px] pb-[20px]">Committed</h3>
                        <p>Going above and beyond to deliver outstanding results for clients.</p>
                    </div>
                    <div className="p-5 bg-[#f3f9fe] border border-[#e7e7e7] rounded-md">
                        <h3 className="text-[24px] pb-[20px]">Transparent</h3>
                        <p>Fostering trust through openness and honesty in all client interactions.</p>
                    </div>
                    <div className="p-5 bg-[#f3f9fe] border border-[#e7e7e7] rounded-md">
                        <h3 className="text-[24px] pb-[20px]">Quality</h3>
                        <p>Ensuring top-tier, reliable service with consistent quality in every project.</p>
                    </div>
                        
                    </div>
                    </div>
            </Container>
        </section>
    )
}