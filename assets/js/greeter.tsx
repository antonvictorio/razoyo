import React, { useState, useEffect }  from 'react'

interface Product {
    name: string;
}
const Product: React.FC<ProductProps> = (props: ProductProps) => {
		const apiUrl = "http://localhost:4000/api/cars"
		const showApiUrl = "http://localhost:4000/api/car"

    const [error, setError] = useState(null)
    const [cars, setCars] = useState([])
		const [id, setId] = useState("aa")
		const [open, setOpen] = useState(false)
		const [currentCar, setCurrentCar]= useState ({
			year: "",
			make: "",
			model: "",
			price: "",
			mpg: "",
			seats: "",
			img_url: ""
		})
	
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (data) => {
                    setCars(data)
                },
                (error) => {
                    setError(error)
                }
            )
      }, [])
    
		toggleButtonState = (e) => {
			let carId = e.target.value

			fetch(`${showApiUrl}?id=${carId}`)
			.then(res => res.json())
			.then(
					(data) => {
							setOpen(true)
							setCurrentCar({
								year: data.year,
								make: data.make,
								model: data.model,
								price: data.price,
								mpg: data.mpg,
								seats: data.seats,
								img_url: data.img_url
							})
					},
					(error) => {
							setError(error)
					}
			)
		}

		closeProductDetail = () => {
			setOpen(false)
		}

		let carousel = 
			cars.map((car) => 
			<div className="max-w-sm bg-white rounded-lg shadow-md ml-5 mr-2" key={`${car.year}-${car.model}`}>
				<a href="#">
						<img className="p-8 rounded-t-lg" src={car.img_url} alt="product image" />
				</a>
				<div className="px-5 pb-5">
						<a href="#">
								<h5 className="text-xl font-semibold tracking-tight text-gray-900">{`${car.year} - ${car.make} ${car.model}`}</h5>
						</a>
						<div className="flex items-center mt-2.5 mb-5">
								<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
								<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-3xl font-bold text-gray-900">${car.price}</span>
							<button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={toggleButtonState} value={car.id}>
								View
							</button>
						</div>
				</div>
			</div>
		)

		let productHighlight = 
			<div className={`flex content-center mt-3 ${open ? '' : 'invisible'}`}>
				<div className="flex justify-center items-center lg:flex-row flex-col gap-8 bg-white rounded-lg shadow-md p-6">
					{/* <!-- Description Div --> */}
					<div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
						<div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
							<img src={currentCar.img_url} alt="Wooden Chair Previw" />
						</div>
					</div>
					<div className=" w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
					<button onClick={closeProductDetail} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" style={{float: `right`}}>
						<span className="sr-only">Close menu</span>
						<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
						<h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{`${currentCar.year} - ${currentCar.make} ${currentCar.model}`}</h2>
						<p className=" font-normal text-base leading-6 text-gray-600 mt-10">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
						<p className=" font-bold text-l lg:leading-6 leading-5 mt-6 ">MPG: {currentCar.mpg}</p>
						<p className=" font-bold text-l lg:leading-6 leading-5 mt-6 ">Seats: {currentCar.seats}</p>
						<p className=" font-bold text-l lg:leading-6 leading-5 mt-6 ">Price: ${currentCar.price}</p>
					</div>

				</div>
			</div>

    return (
			<div>
				<div className="flex">
					{carousel}
				</div>
				<div className="flex">
					{productHighlight}
				</div>
			</div>
    )
}
export default Product;