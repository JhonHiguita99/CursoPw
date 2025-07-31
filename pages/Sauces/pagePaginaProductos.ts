import { Page } from '@playwright/test';
import accionesConstantes from '../../utils/accionesContantes';


export default class PagePaginaProductos {

    private readonly page: Page
    readonly acciones: accionesConstantes
    private expectDescription
    private expectPrice
    private expectName
    

    constructor(page:Page){
            this.page = page;
            this.acciones = new accionesConstantes(page);
           
    }

    async  listaDeProductos(){

        const itemsContainer = await this.page.locator(`.inventory_item`).all();
        const randomIndex =  Math.floor(Math.random() * itemsContainer.length);

        const randomItem = itemsContainer[randomIndex]

    //await randomItem.locator(`.inventory_item_name`).click({force: true})
        this.expectName =  await randomItem.locator(".inventory_item_name").textContent();
        this.expectDescription = await randomItem.locator('.inventory_item_desc').textContent();
        this.expectPrice = await randomItem.locator('.inventory_item_price').textContent();
        
        await this.acciones.screenshot()

        await randomItem.locator(".inventory_item_name").click({force: true})

        await this.acciones.screenshot();

        await this.page.locator('#add-to-cart.btn.btn_primary.btn_small.btn_inventory').click({force: true});

        return this.expectName + " " + this.expectDescription  + " " + this.expectPrice
    }

    


}