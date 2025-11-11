import { chromium } from 'playwright';
import * as XLSX from 'xlsx';
import { test, Page, Browser, expect, Locator } from '@playwright/test';;


export default class {
    private readonly page:Page;

     constructor(page:Page){
        this.page = page;            
    }

    async leerCelda(hoja: string, celda: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const workbook = XLSX.readFile('C:/Users/tr3sa/OneDrive/Documentos/Proyecto Automatización/CursoYoutube/utils/data/Datos.xlsx');
                
                const sheet = workbook.Sheets[hoja];
   
                const cell = sheet[celda];


                console.log(cell)
                resolve(cell ? cell.v.toString() : '');
            } catch (error) {
                reject(`Error reading Excel file: ${error}`);
            }
        });
    }

}