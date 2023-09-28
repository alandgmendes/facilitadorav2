import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import fs from 'fs';

@Injectable()
export class AppService {
  async getHello(produto: string): Promise<any> {
    function convertToFormat(expression: string) {
      // Add 'novo' and '_OrderId_PRICE*DESC_NoIndex_True' to the expression
      const modifiedExpression = `${expression}-novo_OrderId_PRICE*DESC_NoIndex_True`;
      // Replace spaces with hyphens and encode the modified expression
      const formattedExpression = modifiedExpression.replace(/\s+/g, '-');
      const encodedExpression = encodeURIComponent(modifiedExpression);
      // Create the final format
      const result = `/${formattedExpression}#D[A:${encodedExpression}]`;
      return result;
    }

    const appendUrl = convertToFormat(produto);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1020, height: 18000 });

    // Navigate the page to a URL
    await page.goto(`https://lista.mercadolivre.com.br${appendUrl}`);

    // Remove the element with class 'onboarding-cp'
    await page.evaluate(() => {
      const elementToRemove = document.querySelector(
        '.cookie-consent-banner-opt-out',
      );
      if (elementToRemove) {
        elementToRemove.remove();
      }
    });

    // Take a screenshot of the page
    const screenshotBuffer = await page.screenshot();

    // Convert the screenshot to a PDF with custom options (including zoom)
    const pdfBuffer = await page.pdf({
      format: 'A4',
      scale: 1, // Adjust the scale factor if needed (1 for 100%)
      printBackground: true,
    });

    // Encode the PDF buffer as a base64 string
    const data = pdfBuffer.toString('base64');

    // Close the browser
    await browser.close();

    const resp = {
      data,
    };
    return resp;
  }
}