const prisma = require('../utils/prisma.js');

exports.getAllProducts = async (req, res) => {
try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
} catch (error) {
    res.status(500).json({
        message: 'Failed to retrieve products',
        error: error.message
        });
    }
};

exports.getProductById = async (req, res) => {
try {
    const id = Number(req.params.id);
    const product = await prisma.product.findUnique({
        where: { id }
    });
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
} catch (error) {
    res.status(500).json({
        message: 'Failed to retrieve product',
        error: error.message
        });
    }
};

exports.createProduct = async (req, res) => {
try {
    const body = req.body;

    if (!Array.isArray(body)) {
        const product = await prisma.product.create({
            data: {
            name: body.name,
            description: body.description,
            price: body.price,
            stock: body.stock,
            userId: req.user.userId
            }
        });
        return res.status(201).json({
        message: "Product created successfully",
        product
        });
    }
    const result = await prisma.product.createMany({
        data: body.map(p => ({
            name: p.name,
            description: p.description,
            price: p.price,
            stock: p.stock,
            userId: req.user.userId
        }))
    });
    res.status(201).json({
        message: "Products created successfully",
        count: result.count
    });
} catch (error) {
    res.status(500).json({
        message: "Failed to create product",
        error: error.message
        });
    }
};

exports.updateProduct = async (req, res) => {
try {
    const id = Number(req.params.id);
    const { name, description, price, stock } = req.body;
    const product = await prisma.product.update({
        where: { id },
        data: {
            name,
            description,
            price,
            stock
        }
    });
    res.status(200).json(product);
} catch (error) {
    res.status(500).json({
        message: 'Failed to update product',
        error: error.message
        });
    }
};

exports.deleteProduct = async (req, res) => {
try {
    const id = Number(req.params.id);
    const deletedProduct = await prisma.product.delete({
        where: { id }
    });
    res.status(200).json({
        message: 'Product deleted successfully',
        deletedProduct
    });
} catch (error) {
    res.status(500).json({
        message: 'Failed to delete product',
        error: error.message
        });
    }
};