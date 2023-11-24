import { Image } from "primereact/image"

const FeaturedBread = ({breed}) => {
  return (
    <div className="inline-block">
        <img
            className="inline-block h-20 w-20 rounded-full ring-2 ring-black"
            src={breed.url}
            width={100}
            height={100}
            alt=""
        />
        <span>{breed.name}</span>
        {/* <Image
            className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
            src={breed.url}
            width={100}
            height={100}
            alt=""
        /> */}
    </div>
  )
}

export default FeaturedBread