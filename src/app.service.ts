import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://www.olx.com.br/estado-go?q=%20led%20cultivo%20indoor&sp=2');

    // Take a screenshot of the page
    const screenshotBuffer = await page.screenshot();

    // Convert the screenshot to a PDF
    const pdfBuffer = await page.pdf();

    // Encode the PDF buffer as a base64 string
    const data = pdfBuffer.toString('base64');

    // Close the browser
    await browser.close();

    return data;
  }
}
