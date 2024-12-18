import { NextFunction, Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productData = req.body;
    const productCreated = await ProductServices.createProduct(productData);

    res.status(201).json({
      message: 'Bicycle created successfully',
      success: true,
      data: productCreated,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchTerm = req.query.searchTerm;
    const allProducts = await ProductServices.getProducts(searchTerm as string);

    res.status(200).json({
      message: 'Bicycles retrieved successfully',
      status: true,
      data: allProducts,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {productId} = req.params;

    const product = await ProductServices.getProductById(productId);

    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {productId} = req.params;
    const productUpdateData = req.body;

    const updatedProduct = await ProductServices.updateProductById(
      productId,
      productUpdateData,
    );

    res.status(200).json({
      message: 'Bicycle updated successfully',
      status: true,
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {productId} = req.params;
    await ProductServices.deleteProductById(productId);

    res.status(200).json({
      message: 'Bicycle deleted successfully',
      status: 'true',
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
