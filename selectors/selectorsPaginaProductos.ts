import { selectors } from "@playwright/test"

const selectorsPaginaProductos = {

    selectorProductos: `.inventory_item`,
    selectorParaClick: `.inventory_item_name`,
    selectosNombreProducto: `//*[@id="inventory_item_container"]/div/div/div[2]/div[1]`,
    selectorsDescripcionProd: ".inventory_details_desc large_size",
    selectorValorProd: ".inventory_details_price",
    selectorBotonAgregarCarrito: ".btn btn_primary btn_small btn_inventory"
} 
export default selectorsPaginaProductos