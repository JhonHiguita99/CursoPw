import { test, Page, Browser, expect } from '@playwright/test';
import selectorsLoginSauces from '../../selectors/selectorsLoginSauces';
import accionesConstantes from '../../utils/accionesContantes';

export default class pageSaucesLogin{
    private readonly page: Page
    private acciones: accionesConstantes

    constructor(page:Page){
        this.page = page;
        this.acciones = new accionesConstantes(page);
    }

    async ingresarDatosAlLogin(usuario: string, contraseña: string){
        await expect(this.page.locator(selectorsLoginSauces.locatorUser)).toBeVisible();
        await this.page.locator(selectorsLoginSauces.locatorUser).fill(usuario);

        await expect(this.page.locator(selectorsLoginSauces.locatorPaaword)).toBeVisible();
        await this.page.locator(selectorsLoginSauces.locatorPaaword).fill(contraseña);

        await expect(this.page.locator(selectorsLoginSauces.locatorBotonLogin)).toBeVisible();

        await this.acciones.screenshot();

        await this.page.locator(selectorsLoginSauces.locatorBotonLogin).click({force: true});

    }

    async suma(numero1: number, numero2:number, numero3: number){

        const resultado = numero1 + numero2 + numero3 

        console.log({resultado})

        return resultado

    }

    
}