import { useProduct } from "../../provider/AppContext";

const LanguageSelect = () => {
    const { lang, setLang } = useProduct();
    return (
        <select
            style={{ width: 100 }}
            onChange={(val: any) =>
                setLang((old: any) => {
                    return {
                        ...old,
                        current: val.target.value,
                    };
                })
            }
            value={lang.current}
        >
            {lang.langs.map((item: any, index: number) => {
                return (
                    <option value={item} key={index}>
                        {item}
                    </option>
                );
            })}
        </select>
    );
};

export default LanguageSelect;
