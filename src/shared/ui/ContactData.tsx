
export const ContactData = () => (
    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="mb-4">
        <div className={"text-[20px] leading-[28px] font-semibold"}>Наш адрес:</div>
        <p className="text-[18px] leading-[25px] font-light mt-[30px]">
            <span itemProp="addressCountry">Россия</span>, <span
            itemProp="addressRegion">Ленинградская область</span>, <span
            itemProp="addressLocality">Ломоносовский район</span>, <span itemProp="addressLocality">Виллозское городское поселение</span>
            <span itemProp="streetAddress">территория Южная часть производственной зоны Горелово, Волхонское шоссе, дом 6</span>
        </p>
        <div className={"text-[18px] leading-[25px] mt-[30px]"}
             itemScope
             itemType="https://schema.org/ContactPoint"
        >
            <p>Тел: <a className={"font-medium"} itemProp="telephone" href={"tel:+7(812)715-34-88"}>+7
                (812) 715-34-88</a></p>
            <p>Тел/факс: <a className={"font-medium"} itemProp="faxNumber"
                            href={"tel:+7(812)677-00-16"}>+7 (812) 677-00-16</a></p>
            <p>E-mail: <a className={"font-medium"} itemProp="email"
                          href={"mailto:prodiks@yandex.ru"}>prodiks@yandex.ru</a></p>
        </div>
    </div>
)