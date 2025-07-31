import { chromium } from 'playwright';
import ExcelJS from 'exceljs';
import { test, Page, Browser, expect, Locator } from '@playwright/test';;


export default class {
    private readonly page:Page;

     constructor(page:Page){
            this.page = page;             
            }

            
async leerDatosExcel( hoja: string) {
    const  rutaArchivo = 'C:/Users/jhonh/Documents/Proyecto Automatización/CursoYoutube/Datos.xlsx';
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(rutaArchivo);
    const worksheet = workbook.getWorksheet(hoja);
    if (!worksheet) throw new Error(`La hoja ${hoja} no existe en el archivo Excel`);

    const datos: any[] = [];
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // Saltar encabezados
        const usuario = row.getCell(1).text;
        const contraseña = row.getCell(2).text;
        datos.push({ usuario, contraseña });
    });

    return datos;
}



}

/*

(async () => {
    const datos = await leerDatosExcel('datos.xlsx', 'Sheet1');
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    for (const fila of datos) {
        console.log(`Usuario: ${fila.usuario}, Contraseña: ${fila.contraseña}`);
        await page.goto('https://ejemplo.com/login');
        await page.fill('#username', fila.usuario);
        await page.fill('#password', fila.contraseña);
        await page.click('#login-button');
        await page.waitForTimeout(2000);
    }

    await browser.close();
})();
*/
