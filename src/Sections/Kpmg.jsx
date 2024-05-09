import kpmgImg from "../assets/img/kpmg-bg.png"

const Kpmg = () => {
    return (
        <section className="bg-cover md:py-[60px] lg:py-[80px] py-[50px]" style={{backgroundImage: `url(${kpmgImg})`}} id="kpmg">
            <div className="container mx-auto px-3 md:px-10">
                <h2 className="text-2xl text-white md:text-[30px] lg:text-[45px] mb-3 md:mb-6">About <span className="font-medium">KPMG</span></h2>
                <p className="text-white">KPMG operates in 143 countries and territories with over 270,000 employees globally. We serve diverse clients including businesses, governments, non-profits, and the public sector. Our audit and assurance practices support the integrity of capital markets. Committed to quality and service excellence, we aim to earn trust through our professional and personal conduct.</p>
            </div>
        </section>
    );
};

export default Kpmg;