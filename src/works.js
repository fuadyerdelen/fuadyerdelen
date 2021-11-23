import img_nmz from './images/works/namaz.png'



function Works() {
    return (
        <section id="works" className="mt-5 p-4 ">

            <h2 className="mb-5">My works</h2>


            <div className="d-flex flex-column flex-wrap flex-lg-row flex-md-row align-items-center justify-content-evenly">


                <div onClick={() => {
                    window.location = "https://namaz-vakti.netlify.app";
                }} class="card m-2">
                    <img src={img_nmz} class="card-img-top" alt="namaz app pic" />
                    <div class="card-body">
                        <h5 class="card-title">Namaz Vakti App</h5>
                        <p class="card-text">It shows the prayer times for your current location.</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Works;