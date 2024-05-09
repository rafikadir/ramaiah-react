import { FaLinkedin } from "react-icons/fa";
import Title from "../Components/Title"
import client1 from "../assets/img/client1.png"
import client2 from "../assets/img/client2.png"
import client3 from "../assets/img/client3.png"

const Testimonial = () => {

    const testimonialData = [
        {
            "img": client2,
            "name": "Debidata Dash",
            "link": "https://linkedin.com",
            "desc": "“I'm Debi data, and i come from a middle-class household. My parents are teachers, and they have helped me earn my engineering degree”."
        },
        {
            "img": client3,
            "name": "Rahila Firdos",
            "link": "https://linkedin.com",
            "desc": "“I’m Rahila, and i come from a middle-class household. My parents are teachers, and they have helped me earn my engineering degree”."
        },
        {
            "img": client1,
            "name": "Kateryna Califer",
            "link": "https://linkedin.com",
            "desc": "“I’m kateryna, and i come from a middle-class household. My parents are teachers, and they have helped me earn my engineering degree”."
        }
    ]

    return (
        <section className="md:py-[50px] pt-0 pb-10">
            <div className="container mx-auto px-3 md:px-10">
                <div className="mb-[50px]">
                    <Title name="Student" colored="Testimonials"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5">
                    {
                        testimonialData.map((testimoni, index) => (
                            <div className="relative" key={index}>
                                <div className="w-full h-full bg-orange absolute  z-0 rounded-lg -right-3 -bottom-3"></div>
                                <div className="border md:p-7 p-4 rounded-xl bg-white relative z-1">
                                    <div className="flex items-center gap-4 mb-3">
                                    <img src={testimoni.img} alt="client" className="max-w-[60px]"/>
                                    
                                    <div>
                                        <h3 className="text-navy text-[18px] font-flama font-bold mb-1">{testimoni.name}</h3>
                                        <a href={`${testimoni.link}`} target="_blank">
                                            <FaLinkedin className="text-[#0A66C2]"/>
                                        </a>
                                    </div>
                                </div>
                                
                                    <p className="text-navy">{testimoni.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;