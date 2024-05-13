import { TbBeach } from "react-icons/tb";
import Container from "../Container";

import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [

    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!'

    },
    {
        label: 'Windmills',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
        
    }
    
]

const Categories = () => {
    return(
        <Container>
            <div className="
            pt-4
            flex
            items-center
            justify-center
            overflow-x-auto
            ">


            </div>
        </Container>
    )
}

export default Categories;