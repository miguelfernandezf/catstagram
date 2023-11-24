import { Dialog } from "primereact/dialog"
import useBreed from "../hooks/useBreed"
import { Card } from "primereact/card"
import { Image } from "primereact/image"
import { Button } from "primereact/button"

const DetailsPage = ({breed}) => {
    const {showModal, handleModalClick} = useBreed()

    const {name, description} = breed.breeds[0]
    
    const header = (
        <div className="p-3">
            <Image
                src={breed.url}
                alt={breed.id}
            />
        </div>
    )

    const title = (
        <h1 className="m-3 text-3xl font-bold">{name}</h1>
    )

    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

  return (
    <Dialog 
        className="w-1/3 h-auto overflow-hidden bg-slate-200 rounded-md"
        visible={showModal} 
        onHide={()=>handleModalClick()}
    >
        <Card title={title} footer={footer} header={header} className="md:w-25rem">
            <p className="p-3 text-justify">
                {description}
            </p>
        </Card>
    </Dialog>
  )
}

export default DetailsPage