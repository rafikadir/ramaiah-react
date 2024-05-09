
const Schedule = () => {
    return (
        <section className="py-[50px]">
            <div className="container mx-auto px-3 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="mb-5 md:mb-0">
                        <h2 className="text-2xl md:text-[40px] mb-1">Class <span className="text-orange font-bold">Schedule</span></h2>
                        <p className="font-bold">Class timing from 9.00 AM to 3.00 PM</p>
                    </div>
                    <div>
                        <table className="font-flama">
                            <thead className="bg-navy text-white">
                                <tr className="">
                                    <th className="px-10 py-3">Date</th>
                                    <th className="px-10 py-3">Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-[#00000033]">
                                    <td className="px-10 py-2">June 16,2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">June 23,2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">June 30,2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">July 7,2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">July 14,2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">July 21,2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">July 28,2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">August 4, 2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">August 11, 2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">August 18, 2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">August 25, 2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                                <tr className="border border-[#00000033]"> 
                                    <td className="px-10 py-2">September 1, 2024</td>
                                    <td className="px-10 py-2">Sunday</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;