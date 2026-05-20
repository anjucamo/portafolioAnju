import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image } = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
            <h3 className="mb-4 text-xl">{title}</h3>
<Image
  src={image}
  alt="Image"
  width={500}
  height={300}
  className=" w-full h-48 object-cover rounded-2xl"
/>


           
        </div>
    );
}

export default PortfolioBox
