//image for activities
import breakimg from "./assets/active/break2.jpg";
import chaotan from "./assets/active/chaotan.jpg";
import contest from "./assets/active/contest.jpg";
import outdoor1 from "./assets/active/outdoor1.jpg";
import tvc from "./assets/active/tvc.jpg";
import welcomed23 from "./assets/active/welcomed23.jpg";
import tedhanu from "./assets/active/tedhanu.jpg";

const logotext = "Chein Production";
// thông tin meta ( hiển thị khi gửi link )
const meta = {
    title: "Chein Production",
    description: "Chein Production đơn vị sản xuất hình ảnh uy tín chất lượng.",
};
//Thông tin liên hệ trong page contact , thông tin về EmailJS

const contactConfig = {
    YOUR_EMAIL: "cheinproductionteamt@gmail.com",
    YOUR_FONE: "(+84) 0968422147",
    YOUR_ADDRESS: "73 Yên xá, Tân Triều, Thanh Trì,  Hà Nội, Việt Nam",
    description: "Let's do something interesting together!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ml4mm0d",
    YOUR_TEMPLATE_ID: "template_k2in75l",
    YOUR_USER_ID: "eYwtqmEyq5r8bTStL",
};
// thông tin các mạng xã hội
const socialprofils = {
    facebook: "https://www.facebook.com/Cheinkatyy/",
    instagram: "https://www.instagram.com/chein_katy/",
    tiktok: "https://www.tiktok.com/@chein_katy",
    youtube: "https://www.youtube.com/@cheinkaty",
    threads: "https://www.threads.net/@chein_katy"
};
// -----------------------------------------------------------------------------------
//page home use
// thông tin giới thiệu ở page Home khách hàng
const introdata = {
    title: "We are Photoconcept ",
    "animated": {
        "first": "Photo Concept",
        "second": "Photo Graduation",
        "third": "Photo Prewedding",
        "fourth": "Photo Event",
        "five": "Photo Family",
        "six": "Photo Production",
        "one": "Photo Fashion  ",

    },
    description: "Lưu Chọn Khoảnh Khắc – Nơi những bức ảnh không chỉ là những khoảnh khắc được ghi lại, mà là những câu chuyện, cảm xúc và ký ức được lưu giữ mãi mãi. Hãy để mỗi bức ảnh trở thành một dấu ấn độc đáo trong hành trình sáng tạo của bạn",

};

//page home admin
// thông tin giới thiệu ở page Home admin




//-----------------------------------------------------------------------------------
//page about
// thông tin giới thiệu ở page about
const dataabout = {
    title: "",
    aboutme: "Mỗi người đều có câu chuyện riêng, và tôi muốn kể nó qua ống kính của mình. Phong cách của tôi là tự nhiên, chân thật, và đầy cảm xúc. Tôi là Chein, photographer của những khoảnh khắc đáng nhớ.",
    goals: "Hãy để tôi giúp bạn Lưu chọn khoảnh khắc đáng nhớ!"
};
const departments = [

];
//-----------------------------------------------------------------------------------
//page activities
// các ảnh trong slide page activities
const slides = [
    {
        "src": tvc,
        "alt": "Image 4 for carousel",
        "description": "TVC 2023 - The Growth",
    },
    {
        "src": welcomed23,
        "alt": "Image 8 for carousel",
        "description": "Welcome D23 PTIT",
    },
    {
        "src": breakimg,
        "alt": "Image 10 for carousel",
        "description": "Welcome D23 PTIT - Break the Shell 2023",
    },
    {
        "src": outdoor1,
        "alt": "Image 6 for carousel",
        "description": "Street photography ",
    },
];
// các project trong page projects

const activitiesData = [
    { time: "Album", description: "School events", img: chaotan },
    { time: "Album", description: "Sponsor for events", img: tedhanu },
    { time: "Album", description: "Photo Contest", img: contest },
];
//-----------------------------------------------------------------------------------
//page projects
// các project trong page projects
const dataportfolio = [

];

// thông tin trong page đăng ký lịch hẹn
const recruitmentpage =
{
    title1: "Khoảnh khắc hôm nay là kỷ niệm của ngày mai. Đặt lịch chụp ngay để lưu giữ những giây phút tuyệt vời nhất!",
    title2: "Giảm ngay 20% khi đặt lịch tại đây.",
    button: "Apply Now !",
    applylink: "http://localhost:3000/contact",
};

//-----------------------------------------------------------------------------------
//page traditionalroom
// các giải thưởng
const Prizes = [{
    jobtitle: "First prize of the contest 'Nét đẹp trường P' ",
    where: "PTIT",
    date: "2022",
},

{
    jobtitle: "Club has excellent achievements in union activities and youth movements",
    where: "PTIT",
    date: "2022-2023",
},
{
    jobtitle: "Third prize of the contest 'Đồng phục PTIT' ",
    where: "PTIT",
    date: "2023",
},

];

//-----------------------------------------------------------------------------------
//page contribution
const contributors = [

];

const page_header = {
    public: [{
        title: "Trang chủ",
        path: "/",
        type: "user",
        style: {

        }
    },
    {
        title: "Sản phẩm",
        path: "/activities",
        type: "user",
        style: {

        }
    }, {
        title: "Liên hệ",
        path: "/contact",
        type: "user",
        style: {

        }
    }, {
        title: "Giới thiệu",
        path: "/about",
        style: {

        }
    }, {
        title: "Đặt lịch",
        path: "/booking",
        style: {

        }
    }, {
        title: "Đăng nhập",
        path: "/login",
        style: {

        }
    },
    ],
    private: [
        {
            title: "Trang chủ",
            path: "/",
            type: "user",
            style: {
            }
        },
        {
            title: "Quản lý lịch hẹn",
            path: "/appointment-mng",
            type: "user",
            style: {

            }
        }, {
            title: "Quản lý khách hàng",
            path: "/customer-mng",
            type: "user",
            style: {

            }
        }, {
            title: "Quản lý dự án",
            path: "/project-mng",
            style: {

            },

        },
        {
            title: "Đăng xuất",
            path: "/logout",
            style: {

            },
            handler: () => {
                localStorage.removeItem("loggedInUser");
                window.location.reload();
                window.location.href = "/";
            }
        },]
}
export {
    meta,  // thông tin meta
    dataabout, // thông tin giới thiệu ở page about
    dataportfolio, // các project trong page projects
    Prizes,// các giải thưởng
    introdata,// thông tin giới thiệu ở page Home
    contactConfig,// thông tin liên hệ trong page contact
    socialprofils,// thông tin các mạng xã hội
    logotext,// tên của CLB
    slides,// các ảnh trong slide page activities
    activitiesData,// thông tin về các hoạt động của CLB theo từng tháng
    departments,// các ban trong CLB
    recruitmentpage,// thông tin trong page truyển thành viên
    contributors, // thông tin về các contributor
    page_header,
};