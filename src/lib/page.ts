import { Page as PuppeteerPage } from "puppeteer";
import { CssSelector, XPathSelector } from "./selector";
import { MatcherArray } from "./matcherArray";
import { Matcher } from "./matcher";

/** DECLARED GLOBAL VARIABLE */
declare var page: PuppeteerPage;

export class Page {
    readonly URL: string;

    async open() {
        if (!this.URL) {
            throw new Error(`URL not set in page: ${this.constructor.name}`)
        }
        await page.goto(this.URL)

        return this;
    }

    async isOpened(): Promise<boolean> {
        return this.URL && page.url().includes(this.URL); 
    }
}