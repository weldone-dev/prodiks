import {MainPage} from "@/view/MainPage";
import {fetchCurrencies} from "@/entities/services/currencies/currencies.service";
import {fetchLmaMetalPrice} from "@/entities/services/lme/lme.service";

export default async function Home() {
    const currency = await fetchCurrencies();
    const lmeData = await fetchLmaMetalPrice();
    return (
        <MainPage
            lmeData={lmeData}
            currency={currency}
        />
    );
}
