export const addProduct = async (req, res) => {
  try {
    let {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      date,
      bestseller,
    } = req.body;

    image1 = await uploadOnCloudinary(req.files.image1[0].path);
    image2 = await uploadOnCloudinary(req.files.image2[1].path);
    image3 = await uploadOnCloudinary(req.files.image3[2].path);
    image4 = await uploadOnCloudinary(req.files.image4[3].path);

    let productData = new Product({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      date: Date.now(),
      bestseller: bestseller === "true" ? true : false,
      image1,
      image2,
      image3,
      image4,
    });

    const product = await productData.create(productData);

    return res.status(201).json({ product})
  } catch (error) {
    console.log(`Add Product Error `);
    return res.status(500).json({ message: `Add Product Error ${error}` });
  }
};
