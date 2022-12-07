import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';

export const ContactIcon = [
    {
        icon: <BiMap />,
        name: "Our Address",
        text: "A108 Adam Street, New York, NY 535022",
        gr: 12,
        gr1:12,
    },
    {
        icon: <HiOutlineMail />,
        name: "Email Us",
        text: "info@example.com",
        text2: "contact@example.com",
        gr: 6,
        gr1:12,
    },
    {
        icon: <TbPhoneCall />,
        name: "Call Us",
        text: "+1 5589 55488 55",
        text2: "+1 6678 254445 41",
        gr: 6,
        gr1:12,
    },
]

export const Coninput = [
    {
        name: "Your Name",
        gr: 6
    },
    {
        name: "Your Email",
        gr: 6
    },
    {
        name: "Subject",
        gr: 12
    },
]