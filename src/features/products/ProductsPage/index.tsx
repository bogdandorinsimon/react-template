import { Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { PageWrapper } from "layout/PageWrapper";
import { Product } from "../models";
import { useProducts } from "../queries/useProducts";

const ProductsPage = () => {
  const { translate } = useTranslate();

  const { products, isLoading, isError, error } = useProducts();

  return (
    <PageWrapper isLoading={isLoading} isError={isError} error={error?.message}>
      <Typography>{translate("common.hello_world", "Hello World!")}</Typography>
      {products?.map((product: Product) => (
        <Typography key={product.id}>{product.title}</Typography>
      ))}
    </PageWrapper>
  );
};

export default ProductsPage;
