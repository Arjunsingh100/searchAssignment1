const productModel = require('../Models/ProductModel.js');

module.exports.serachController = async (req,res) => {
    try {
        const { searchKeyword } = req.params;
        const products = await productModel.find(
            {
                $or: [
                    { name: { $regex:searchKeyword, $options: 'i' } },
                    { description: { $regex: searchKeyword, $options: 'i' } }
                ]
            }
        ).select('-photo');
        res.status(201).send({
            success: true,
            products
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while searching products'
        })
    }
}