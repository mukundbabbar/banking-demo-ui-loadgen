const puppeteer = require('puppeteer'); // v23.0.0 or later

const BASE_URL = process.env.ENDPOINT_URL;


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 696,
            height: 677
        })
    }
    {
        const targetPage = page;
        await targetPage.goto(BASE_URL);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125.8125,
                y: 20.046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])')
        ])
            .setTimeout(timeout)
            .fill('mukund@gmail.com');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88.8125,
                y: 11.65625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])')
        ])
            .setTimeout(timeout)
            .fill('abcd');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"loginForm\\"]/div[4]/button)'),
            targetPage.locator('::-p-text(Sign In)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 177,
                y: 17.265625,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('#applyLoanButton'),
            targetPage.locator('::-p-xpath(//*[@id=\\"applyLoanButton\\"])')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 41.28436279296875,
                y: 20.634185791015625,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#loanAmount'),
            targetPage.locator('::-p-xpath(//*[@id=\\"loanAmount\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 176.2421875,
                y: 18.0234375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#loanAmount'),
            targetPage.locator('::-p-xpath(//*[@id=\\"loanAmount\\"])')
        ])
            .setTimeout(timeout)
            .fill('100000');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#loanPurpose'),
            targetPage.locator('::-p-xpath(//*[@id=\\"loanPurpose\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 182,
                y: 19.6328125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#loanPurpose'),
            targetPage.locator('::-p-xpath(//*[@id=\\"loanPurpose\\"])')
        ])
            .setTimeout(timeout)
            .fill('home');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#loanTerm'),
            targetPage.locator('::-p-xpath(//*[@id=\\"loanTerm\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 161,
                y: 15.2421875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#loanTerm'),
            targetPage.locator('::-p-xpath(//*[@id=\\"loanTerm\\"])')
        ])
            .setTimeout(timeout)
            .fill('12');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#employmentStatus'),
            targetPage.locator('::-p-xpath(//*[@id=\\"employmentStatus\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 124,
                y: 18.8515625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#employmentStatus'),
            targetPage.locator('::-p-xpath(//*[@id=\\"employmentStatus\\"])')
        ])
            .setTimeout(timeout)
            .fill('fullTime');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#annualIncome'),
            targetPage.locator('::-p-xpath(//*[@id=\\"annualIncome\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 120.2421875,
                y: 21.4609375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#annualIncome'),
            targetPage.locator('::-p-xpath(//*[@id=\\"annualIncome\\"])')
        ])
            .setTimeout(timeout)
            .fill('30000000');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#termsAgreement'),
            targetPage.locator('::-p-xpath(//*[@id=\\"termsAgreement\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7,
                y: 12.0703125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(2) > div:nth-of-type(2) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"loanApplicationForm\\"]/div[7]/button)'),
            targetPage.locator('::-p-text(Submit Loan Application)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 207,
                y: 21.0703125,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
