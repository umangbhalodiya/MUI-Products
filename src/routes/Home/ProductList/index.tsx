import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Rating,
  Button,
  CardActions,
} from "@mui/material";

import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { ProductTypes } from "../../../store/ApiSlice/productSlice";

export const ProductList = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const handleSelectProduct = (id: number) => {
    setSelectedProductId(id);
  };
  return (
    <Box
      sx={{
        height: "calc(100vh - 40px)", // Adjust height as needed (e.g., minus header height)
        overflowY: "auto", // Enable vertical scrolling
      }}
    >
      <Grid container spacing={4}>
        {products.map((product: ProductTypes) => (
          <Grid item xs={12} key={product.id}>
            <Card
              onClick={() => handleSelectProduct(product.id)}
              sx={{
                display: "flex",

                border:
                  selectedProductId === product.id
                    ? "2px solid #b792f7"
                    : "1px solid #e0e0e0",
                borderRadius: "12px",
                padding: "16px",
                boxShadow: "none",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "30%" }}
              >
                {/* Box to style the image with background and padding */}
                <Box
                  sx={{
                    backgroundColor: "#f4f7fb", // Background color for image container
                    padding: "16px", // Padding around the image
                    borderRadius: "4px", // Optional: Rounded corners for the background
                    height: "140px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: "4px", height: "100%" }} // Rounded corners for the image
                    image={product.image}
                    alt={product.title}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Rating
                    name="read-only"
                    value={product.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    ({product.rating.count})
                  </Typography>
                </Box>
              </Box>

              {/* Right Part: Category, Name, Description, Price */}
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6941C6",
                      fontWeight: 600,
                    }}
                  >
                    Category: {product.category}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {product?.description?.slice(0, 50)}...
                  </Typography>
                  <Typography variant="h6" component="div" color="black">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
