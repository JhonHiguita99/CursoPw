import { test, Page, Browser, expect, Locator } from '@playwright/test';
import accionesConstantes from '../../utils/accionesContantes';
import pagePaginaProductos from './pagePaginaProductos';

export default class pageCarrito {

    private readonly page: Page
    private acciones: accionesConstantes
    private prod: pagePaginaProductos
    

    constructor(page:Page){
                this.page = page;
                this.acciones = new accionesConstantes(page);
                this.prod = new pagePaginaProductos(page)
    }

    async ValidarProductosEnELCarrito() {
        const hola =  await this.prod.listaDeProductos()
        await this.page.locator(".shopping_cart_link").click({force:true})
        const nombre = await this.page.locator(".inventory_item_name").innerText();
        const description = await this.page.locator(".inventory_item_desc").innerText();
        const valor = await this.page.locator(".inventory_item_price").innerText();
        const fraseAValidar = nombre + " " + description + " " + valor 
        console.log({fraseAValidar})
        console.log({hola})

        await expect(fraseAValidar).toEqual(hola)

        await this.acciones.screenshot();

        await this.page.locator("#checkout.btn.btn_action.btn_medium.checkout_button").click({force:true})

    }

    async ingresarDatosCheckout(primerNombre:string, apellidos:string, codigoPostal:string){

        await expect (this.page.locator(`//*[@id="first-name"]`)).toBeEditable();
        await this.page.locator(`//*[@id="first-name"]`).fill(primerNombre);

        await expect (this.page.locator(`//*[@id="last-name"]`)).toBeEditable();
        await this.page.locator(`//*[@id="last-name"]`).fill(apellidos);

        await expect (this.page.locator(`//*[@id="postal-code"]`)).toBeEditable();
        await this.page.locator(`//*[@id="postal-code"]`).fill(codigoPostal);

        await this.acciones.screenshot();

        await this.page.locator(`//*[@id="continue"]`).click({force:true})
    }

    async finalizarCompra(){
        await this.page.locator(`//*[@id="finish"]`).click({force:true});

        const mensajeExitoso = await this.page.locator(`//*[@id="checkout_complete_container"]/h2`).innerText();

        console.log({mensajeExitoso})

        expect(mensajeExitoso).toEqual("Thank you for your order!")
        
        await this.acciones.screenshot()


    }

    
}
