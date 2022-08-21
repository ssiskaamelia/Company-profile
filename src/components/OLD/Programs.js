import Card from "./Card";
// import Cardtestimonial from "./CardTestimonial";
function Programs() {
    return (
        <div className="container Programs">
            <h2 className="main-title text-center">Programs</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2" onClick={() => window.open("https://www.utschool.sch.id/")}>
                            <Card title="UT SCHOOL" img="card1.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
                        </div>
                        <div className="col-md-4 mb-2" onClick={() => window.open("https://www.utschool.sch.id/")}>
                            <Card title="UT DAY CARE" img="card2.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
                        </div>
                        <div className="col-md-4 mb-2" onClick={() => window.open("https://www.utschool.sch.id/")}>
                            <Card title="POLIKLINIK" img="card3.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
                        </div>

                        <div className="col-md-4 mb-2" onClick={() => window.open("https://ylcku.com/")}>
                            <Card title="YKBUT LEARNING CENTER" img="card3.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien."
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Programs;
