import { Link } from "react-router-dom"
import how1 from "../../assets/how1.jpg"
import how2 from "../../assets/how2.jpg"
import how3 from "../../assets/how3.jpg"
import how4 from "../../assets/how4.jpg"
import how5 from "../../assets/how5.jpg"
import how6 from "../../assets/how6.jpg"
import how7 from "../../assets/how7.jpg"
import how8 from "../../assets/how8.jpg"
import how9 from "../../assets/how9.jpg"
const Help = () => {
    const data: {
        top: string;
        detail: string;
        to: string;
        img: string;
    }[] = [
            {
                top: "Cryptocurrency", detail: "Digital assets, like bitcoin, are an emerging asset class for investors. Our digital asset fund offers investors exposure to bitcoin and other assets.", to: "/", img: how4
            },
            {
                top: "Real Estate Investment",
                detail: "We have got you covered when it involves real estate investments. Our clients go to to sleep while we do all the hard job.", img: how5
                , to: ""
            },
            {
                top: "Cannabis Investments",
                detail: "Big institutional investors are getting increasingly high on the growth potential for products derived from the cannabis plant, more commonly known as marijuana.", img: how6, to: ""
            },
            {
                top: "Retirement Planning",
                detail: "Dramatic advances in healthcare have extended the lives of people in, predominantly, first-world and developed countries. That means that without adequate personal savings and/or pensions, people could easily outlive their retirement funds.", img: how7
                , to: ""
            },
            {
                top: "Loans",
                detail: "Our Business/ Personal Loan provides funds which you can repay over one to five years. You repay the loan in monthly set installments. Whatever your business plans, our fixed or revolving business loans can help you reach your goals.", img: how8
                , to: ""
            },
            {
                top: "PAMM and MAM",
                detail: "The performance (profits and losses) of a PAMM or MAM account manager is distributed among the managed accounts. The clients’ managed accounts are connected to the account manager’s main account and all trades made by the manager are reflected proportionally in the clients’ accounts.",
                img: how9
                , to: ""
            }

        ]
    const topData: {
        heading: string, img: string, body: string, link: string, to: string

    }[] = [
            {
                heading: "EliteCity Savings", img: how2,
                body: "EliteCity Savings continues to serve the financial needs of individuals, farmers, businesses, and industries by offering the traditional banking products, as well as online solutions.",
                link: "Learn More About Us", to: "/"
            }, {
                heading: "Investors Relation",
                img: how3,
                body: "Loyalty is very important to us, and we focus upon maintaining long-term relationships. This is clearly reflected that most of our clients come to us via other client recommendations and referrals.",
                link: "Learn More",
                to: "/"
            }
        ]
    return (
        <>
            <div className=" bg-slate-100 pt-20 px-[12%] pb-10 max-tab:px-[6%] ">
                <h1 className="text-center pb-10 text-4xl">How can we help you today?</h1>
                <div className="top dfAc gap-12 max-tab:flex-wrap">
             
                    {topData.map((value, key) => (
                        <div className="items max-tab:w-full bg-white shadow-md pb-8 " key={key}>
                            <div className="img">
                                <picture>
                                    <img src={value.img} className="h-80 w-full object-center object-cover" alt={value.heading} />
                                </picture>
                            </div>
                            <div className="detail df-fldc-jc gap-5 pt-4 px-6">
                                <h3 >{value.heading}</h3>
                                <p className="text-[#777777] text-[.7rem] font-semibold">{value.body}</p>
                                <Link to={value.to} className="text-sky-500 font-semibold hover:text-black">{value.link}
                                </Link>
                            </div>
                        </div>
                    ))}




                </div>
                <div className="howWeCan dfAc  mt-10 gap-8  max-tab:flex-wrap">
                    {data.slice(0,3).map((value, index) => (
                        <div className="items bg-white   max-tab:w-full w-[19.8rem]  shadow-md   " key={index}>
                            <div className="img ">
                                <picture>
                                    <img src={value.img} className="h-48 max-tab:h-80 w-full object-center object-cover " alt={value.top} />
                                </picture>
                            </div>
                            <div className="detail df-fldc gap-5 pt-4 h-80 max-tab:h-52 px-6">
                                <h5>{value.top}</h5>
                                <p className="text-[#777777] text-[.7rem] font-semibold">{value.detail}</p>
                                <Link to={value.to} className="text-sky-500 font-semibold hover:text-black">Learn more</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="howWeCan dfAc  mt-10 gap-8  max-tab:flex-wrap">
                    {data.slice(3,6).map((value, index) => (
                        <div className="items bg-white   max-tab:w-full w-[19.8rem]  shadow-md   " key={index}>
                            <div className="img ">
                                <picture>
                                    <img src={value.img} className="h-48 max-tab:h-80 w-full object-center object-cover " alt={value.top} />
                                </picture>
                            </div>
                            <div className="detail df-fldc gap-5 pt-4 h-80 max-tab:h-52 px-6">
                                <h5>{value.top}</h5>
                                <p className="text-[#777777] text-[.7rem] font-semibold">{value.detail}</p>
                                <Link to={value.to} className="text-sky-500 font-semibold hover:text-black">Learn more</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Help