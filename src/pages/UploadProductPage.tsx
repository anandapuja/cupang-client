import { FormEvent, useState } from "react";
import { ProductUpload } from "../utils/Type";

const UploadProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  async function postProductHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!image) {
      console.log(image);
      return;
    } else {
    }

    const formData = new FormData();
    formData.append("file", image);
    const dataProduct: ProductUpload = {
      name,
      price,
      stock,
      description,
      image,
    };

    console.log(formData);

    // try {
    //   fetch("", {
    //     method: "POST",
    //     body: dataProduct,
    //   });
    // } catch (errors) {
    //   console.log(errors);
    // }
  }

  return (
    <div className="w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">Upload</h3>
      </div>

      <form className="max-w-sm mx-auto" onSubmit={postProductHandler}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="flex gap-6">
          <div className="mb-5 w-4/5">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <input
              type="number"
              min={0}
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
              onChange={(e) => setPrice(Number(e.target.value))}
              value={price}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="stock"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Stock
            </label>
            <input
              type="number"
              min={0}
              id="stock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
              onChange={(e) => setStock(Number(e.target.value))}
              value={stock}
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            rows={10}
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <div className="mb-5">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Image
          </label>
          <input
            type="file"
            min={0}
            id="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
            // onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadProductPage;
