import React , {FC , useState , ChangeEvent,FormEvent} from 'react'
import './styles.css'
import Pizza from '../models/Pizaa'

interface AddPizzaFormProps {
    addNewPizza : (newPizza: Pizza) => void
}

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm : FC<AddPizzaFormProps> = ({ addNewPizza }) => {

    const [pizza, setPizaa] = useState<{title: string, price: string, img: string}>(initState)

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
       const {name , value} = e.target

       setPizaa({
        ...pizza,
        [name]:value
       })


    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
       e.preventDefault()
       const { title , price , img} = pizza

       if(title && price && img){
        addNewPizza({
            title,
            price: Number(price),
            img,
            id: Date.now()
        })
        setPizaa(initState)
       } 
     }


    return (
        <form onSubmit={handleSubmit}>
            <input
              name='title'
              type='text'
              placeholder='Name'
              onChange={handleChange}
              value={pizza.title}
            />
            <input
              name='price'
              type='text'
              placeholder='price'
              onChange={handleChange}
              value={pizza.price}
            />
            <input
              name='img'
              type='text'
              placeholder='img'
              onChange={handleChange}
              value={pizza.img}
            />
            <button type='submit'>
                Submit
            </button>
        </form>
    )
}

export default AddPizzaForm