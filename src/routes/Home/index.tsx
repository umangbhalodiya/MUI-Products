import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchProducts } from "../../store/ApiSlice/productSlice";
import { Grid, Container, Typography } from "@mui/material";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <Container maxWidth={false} sx={{ padding: "20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ProductList />
          </Grid>

          <Grid item xs={12} md={8}>
            <ProductDetails />
          </Grid>
        </Grid>
      </Container>{" "}
    </div>
  );
}
