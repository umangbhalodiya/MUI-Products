import { Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ProductTypes } from "../../../store/ApiSlice/productSlice";

const ProductDetails = () => {
  const { productItem } = useSelector((state: RootState) => state.products);

  if (!productItem) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            Select a product to see the details
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const typedProductItem = productItem as ProductTypes;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          {typedProductItem?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Category: {typedProductItem?.category}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {typedProductItem?.description}
        </Typography>
        <Typography variant="h6" component="div" color="primary" sx={{ mt: 2 }}>
          {typedProductItem?.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Rating: {typedProductItem?.rating?.rate} stars
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
