import { test, Page, Browser} from '@playwright/test';
import accionesConstantes from '../utils/accionesContantes';
import MercadoLibrePagePrincipal from '../pages/MercadoLibre/MercadoLibrePrincipal';
import LeerExcel from '../utils/LeerExcel';
import LeerXLSX from '../utils/LeerXLSX';


(async()=>{
let page: Page | null = null
let browser: Browser
let acciones: accionesConstantes
let mercadolibreP:MercadoLibrePagePrincipal
let lectoraDatos:LeerExcel
let leerXLSX:LeerXLSX

  test.beforeEach(async ({ page }) => {
    
        mercadolibreP = new MercadoLibrePagePrincipal(page)
        //lectoraDatos = new LeerExcel(page)
        leerXLSX = new LeerXLSX(page)
        
        
        
    });


    test('@CasoValidarMercadoLibre', async ({ page }) => {
        await test.step('Validar Url', async () => {
            await page.goto("https://www.mercadolibre.com.co/");
            //await expect(page).toHaveTitle("Navidad en Mercado Libre Colombia");
        });

        await test.step('Ingresar el valor a buscar', async () => {
           
            await mercadolibreP.buscarMercadoLibre(await leerXLSX.leerCelda('Mercadolibre','A2'))

            //console.log(datos)
            /*
            for (const fila of datos) {
                console.log(`Usuario: ${fila.usuario}, Contraseña: ${fila.contraseña}`);
                    
                await mercadolibreP.buscarMercadoLibre(fila.usuario);
                }*/

            

        });

        await test.step('@', async () => {
            const obtenerReturn = await mercadolibreP.obtenerelTituloDeLosProductosBuscados()

            console.log(obtenerReturn)
            //await mercadolibreP.obtenerelTituloDeLosProductosBuscados()
        });  
    
    });
   

    
})();