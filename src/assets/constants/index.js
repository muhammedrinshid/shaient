import { off1, off2, off3, off4, off5, off6 } from "../icons"
import { client1, client2, client3, client4, client5, client6, client7 } from "../images"

const menu=[
    {
        content:"Company",
        to:''
    },
    {
        content:"Services",
        to:'service'
    },
    {
        content:"About",
        to:'about'
    }
]

const clients=[
    
    {
        img:client2,
        altText:"client logo"
    },
    {
        img:client3,
        altText:"client logo"
    },
    {
        img:client4,
        altText:"client logo"
    },
    {
        img:client5,
        altText:"client logo"
    },
    {
        img:client6,
        altText:"client logo"
    },
    {
        img:client7,
        altText:"client logo"
    },
]
const offerings=[
    {
        img:off1,
        heading:"Branding",
        content:"Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",

    },
    {
        img:off2,
        heading:"Web development",
        content:"Integer ante non nunc, eget est justo vel semper nunc. Lacus ",

    },
    {
        img:off3,
        heading:"Digital marketing",
        content:"Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",

    },
    {
        img:off4,
        heading:"Mobile App",
        content:"Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",

    },
    {
        img:off5,
        heading:"SEO",
        content:"Integer ante non nunc, eget est justo vel semper nunc. Lacus",

    },
    {
        img:off6,
        heading:"User testing",
        content:"Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.   ",

    },

]
const blogs1=[
    {
        btn:"website",
        hed:"Creative landing page",
        img:true,
    },
    {
        btn:"branding",
        hed:"Creative Branding",
        img:false,
    },
    {
        btn:"Development",
        hed:"Automation. Advanced Level",
        img:false,
    },
]
const blogs2=[
    {
        btn:"digital marketing",
        hed:"Why We Collect User’s Data",
        img:false,
    },
    {
        btn:"User testing",
        hed:"Creative landing page",
        img:true,
    },
    {
        btn:"SEO",
        hed:"How We Optimized Our SEO",
        img:false,
    },
]



const footers=[
    {
        head:"Compnay",
        links:[
            "aboot us","team","careers"
        ],
    },
    {
        head:"services ",
        links:[
            "brandings","web development","digital marketing","mobile app","SEO","Under testing"
        ],
    },
    {
        head:"Resources",
        links:[
            "Blog","case study","testimonials"
        ],
    },
    {
        head:"follow us",
        links:[
            "instagram","facebook","figma","github"
        ],
    },
]
export {
    menu,
    clients,
    offerings,
    blogs1,
    blogs2,
    footers


}